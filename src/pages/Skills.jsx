import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Code2, Database, BrainCircuit } from 'lucide-react';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillCategories = [
    {
        title: "Frontend",
        icon: <Monitor className="h-6 w-6 text-primary" />,
        color: "primary",
        skills: [
            { name: "React.js", logo: `${DEVICON_BASE}/react/react-original.svg` },
            { name: "HTML5", logo: `${DEVICON_BASE}/html5/html5-original.svg` },
            { name: "CSS3", logo: `${DEVICON_BASE}/css3/css3-original.svg` },
            { name: "JavaScript", logo: `${DEVICON_BASE}/javascript/javascript-original.svg` },
            { name: "Tailwind CSS", logo: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg` },
            { name: "Bootstrap", logo: `${DEVICON_BASE}/bootstrap/bootstrap-original.svg` },
        ]
    },
    {
        title: "Backend",
        icon: <Server className="h-6 w-6 text-secondary" />,
        color: "secondary",
        skills: [
            { name: "Node.js", logo: `${DEVICON_BASE}/nodejs/nodejs-original.svg` },
            { name: "Express", logo: `${DEVICON_BASE}/express/express-original.svg` },
            { name: "PHP", logo: `${DEVICON_BASE}/php/php-original.svg` },
        ]
    },
    {
        title: "Programming Languages",
        icon: <Code2 className="h-6 w-6 text-primary" />,
        color: "primary",
        skills: [
            { name: "C++", logo: `${DEVICON_BASE}/cplusplus/cplusplus-original.svg` },
            { name: "Java", logo: `${DEVICON_BASE}/java/java-original.svg` },
            { name: "Python", logo: `${DEVICON_BASE}/python/python-original.svg` },
            { name: "C", logo: `${DEVICON_BASE}/c/c-original.svg` },
        ]
    },
    {
        title: "Databases & Tools",
        icon: <Database className="h-6 w-6 text-secondary" />,
        color: "secondary",
        skills: [
            { name: "MongoDB", logo: `${DEVICON_BASE}/mongodb/mongodb-original.svg` },
            { name: "MySQL", logo: `${DEVICON_BASE}/mysql/mysql-original.svg` },
            { name: "Git", logo: `${DEVICON_BASE}/git/git-original.svg` },
            { name: "GitHub", logo: `${DEVICON_BASE}/github/github-original.svg` },
            { name: "VS Code", logo: `${DEVICON_BASE}/vscode/vscode-original.svg` },
            { name: "Postman", logo: `${DEVICON_BASE}/postman/postman-original.svg` },
            { name: "Figma", logo: `${DEVICON_BASE}/figma/figma-original.svg` },
        ]
    },
    {
        title: "Domain Skills",
        icon: <BrainCircuit className="h-6 w-6 text-primary" />,
        color: "primary",
        skills: [
            { name: "Data Structures", logo: null, emoji: "🧩" },
            { name: "Algorithms", logo: null, emoji: "⚡" },
            { name: "OOP", logo: null, emoji: "🔷" },
            { name: "Web Dev", logo: null, emoji: "🌐" },
            { name: "REST APIs", logo: null, emoji: "🔗" },
        ]
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

export default function Skills() {
    const [filter, setFilter] = useState('All');

    const filterOptions = ['All', 'Frontend', 'Backend', 'Programming Languages', 'Databases & Tools', 'Domain Skills'];

    const filteredCategories = filter === 'All'
        ? skillCategories
        : skillCategories.filter(c => c.title === filter);

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        A comprehensive overview of my technical toolkit — from frontend frameworks and backend runtimes to databases, tools, and core CS concepts.
                    </p>
                </motion.div>

                {/* Filter Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-14"
                >
                    {filterOptions.map(option => (
                        <button
                            key={option}
                            onClick={() => setFilter(option)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === option
                                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                                    : 'bg-card text-text/70 border border-white/10 hover:border-primary/50 hover:text-text'
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </motion.div>

                {/* Category Cards */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredCategories.map((category, idx) => (
                            <motion.div
                                layout
                                key={category.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35 }}
                                className="bg-card rounded-2xl p-7 border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg relative overflow-hidden group"
                            >
                                {/* Background glow */}
                                <div className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${category.color === 'primary' ? 'bg-gradient-to-br from-primary/15 to-transparent' : 'bg-gradient-to-br from-secondary/15 to-transparent'}`} />

                                {/* Card Header */}
                                <div className="flex items-center gap-4 mb-7 relative z-10">
                                    <div className="p-3 bg-background rounded-xl border border-white/5 shadow-inner">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">{category.title}</h2>
                                </div>

                                {/* Tech Logo Chips */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-wrap gap-3 relative z-10"
                                >
                                    {category.skills.map((skill, sIdx) => (
                                        <motion.div
                                            key={sIdx}
                                            variants={chipVariants}
                                            whileHover={{ scale: 1.08, y: -2 }}
                                            className="flex items-center gap-2 px-3 py-2 bg-background rounded-xl border border-white/5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 cursor-default"
                                        >
                                            {skill.logo ? (
                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className="w-5 h-5 object-contain"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <span className="text-base leading-none">{skill.emoji}</span>
                                            )}
                                            <span className="text-sm font-medium text-text/85 whitespace-nowrap">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    );
}
