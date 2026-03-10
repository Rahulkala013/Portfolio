import { motion } from 'framer-motion';
import { Award, Calendar, ChevronRight } from 'lucide-react';

export default function Certificates() {
    const certificates = [
        {
            title: "ChatGPT-4 Prompt Engineering",
            issuer: "Infosys",
            year: "2025"
        },
        {
            title: "Computational Theory",
            issuer: "Infosys",
            year: "2025"
        },
        {
            title: "Master Generative AI & Tools",
            issuer: "Infosys",
            year: "2025"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            year: "2025"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

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
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-card p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500">
                                <Award className="w-24 h-24 text-secondary" />
                            </div>

                            <div className="relative z-10 flex items-start">
                                <div className="p-3 bg-secondary/10 rounded-xl mr-5">
                                    <Award className="w-8 h-8 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{cert.title}</h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-text/60">
                                        <div className="flex items-center text-sm font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                                            {cert.issuer}
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <Calendar className="w-4 h-4 mr-2 opacity-70" />
                                            {cert.year}
                                        </div>
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
