import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';

import chatgptImg from '../assets/Chatgpt.png';
import cloudImg from '../assets/Cloud.png';
import computationalImg from '../assets/Computational.png';
import masterImg from '../assets/Master.png';

export default function Certificates() {
    const certificates = [
        {
            title: "ChatGPT-4 Prompt Engineering",
            issuer: "Infosys",
            year: "2025",
            image: chatgptImg
        },
        {
            title: "Computational Theory",
            issuer: "Infosys",
            year: "2025",
            image: computationalImg
        },
        {
            title: "Master Generative AI & Tools",
            issuer: "Infosys",
            year: "2025",
            image: masterImg
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            year: "2025",
            image: cloudImg
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        Professional certifications and courses completed to enhance my technical arsenal and stay up-to-date with emerging technologies.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5 hover:-translate-y-1"
                        >
                            {/* Certificate Image */}
                            <div className="relative overflow-hidden h-52">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center gap-5 text-text/60 text-sm">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        <span className="font-medium">{cert.issuer}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 opacity-70" />
                                        {cert.year}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
