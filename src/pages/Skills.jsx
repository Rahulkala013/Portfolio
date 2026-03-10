import { motion } from 'framer-motion';
import {
    Code2, Monitor, PenTool, BrainCircuit,
    Terminal, Server, Globe, Database
} from 'lucide-react';

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code2 className="h-6 w-6 text-primary" />,
            skills: [
                { name: "C++", level: 90 },
                { name: "Java", level: 85 },
                { name: "JavaScript", level: 85 },
                { name: "Python", level: 75 },
                { name: "C", level: 80 },
                { name: "PHP", level: 70 }
            ]
        },
        {
            title: "Frameworks & Technologies",
            icon: <Monitor className="h-6 w-6 text-secondary" />,
            skills: [
                { name: "React.js", level: 88 },
                { name: "Node.js", level: 82 },
                { name: "Tailwind CSS", level: 90 },
                { name: "HTML/CSS", level: 95 },
                { name: "Bootstrap", level: 85 }
            ]
        },
        {
            title: "Tools",
            icon: <PenTool className="h-6 w-6 text-primary" />,
            skills: [
                { name: "Git & GitHub", level: 88 },
                { name: "VS Code", level: 95 },
                { name: "Postman", level: 80 },
                { name: "Figma", level: 75 },
                { name: "MongoDB", level: 78 }
            ]
        },
        {
            title: "Domain Skills",
            icon: <BrainCircuit className="h-6 w-6 text-secondary" />,
            skills: [
                { name: "Data Structures & Algorithms", level: 85 },
                { name: "Object Oriented Programming", level: 90 },
                { name: "Web Application Dev", level: 88 }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise, including programming languages, frameworks, tools, and domain-specific knowledge.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-card rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-colors shadow-lg relative overflow-hidden group"
                        >
                            {/* Subtle background glow effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex items-center mb-8 relative z-10">
                                <div className="p-3 bg-background rounded-xl mr-4 border border-white/5 shadow-inner">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl font-bold tracking-tight">{category.title}</h2>
                            </div>

                            <div className="space-y-6 relative z-10">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-text/90">{skill.name}</span>
                                            <span className="text-xs font-semibold text-text/50 bg-background px-2 py-1 rounded-md">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.1 + (skillIndex * 0.1), ease: "easeOut" }}
                                                className={`h-full rounded-full ${index % 2 === 0 ? 'bg-gradient-to-r from-primary to-indigo-400' : 'bg-gradient-to-r from-secondary to-emerald-400'}`}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
