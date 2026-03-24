import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
    const education = [
        {
            institution: "Lovely Professional University",
            degree: "Bachelor of Technology – Computer Science and Engineering",
            score: "CGPA: 7.84",
            date: "2023 – Present",
            icon: <GraduationCap className="w-6 h-6 text-primary" />
        },
        {
            institution: "T.C.G Public School",
            degree: "12th Grade",
            score: "Percentage: 81%",
            date: "2021 – 2022",
            icon: <GraduationCap className="w-6 h-6 text-secondary" />
        },
        {
            institution: "T.C.G Public School",
            degree: "10th Grade",
            score: "Percentage: 92%",
            date: "2019 – 2020",
            icon: <GraduationCap className="w-6 h-6 text-indigo-400" />
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Education</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        My academic journey and qualifications that have shaped my foundation in computer science and software development.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/10 rounded-full md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-card border-4 border-background flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full pl-12 md:pl-0 md:w-1/2">
                                    <div className={`bg-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                        }`}>
                                        <div className="flex items-center mb-4">
                                            <div className="p-3 bg-background rounded-xl mr-4 border border-white/5">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                                {item.institution}
                                            </h3>
                                        </div>

                                        <h4 className="text-lg font-medium text-text/90 mb-4">{item.degree}</h4>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-text/60">
                                            <div className="flex items-center font-semibold text-primary/80 bg-primary/10 px-3 py-1 rounded-md">
                                                {item.score}
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {item.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
