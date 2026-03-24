import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Monitor, Server, Code2, Database, BrainCircuit,
    Flame, ShieldCheck, Zap, Clock, GitBranch, Cpu
} from 'lucide-react';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

/* ─── Technical Categories ─── */
const techCategories = [
    {
        title: "Frontend",
        icon: <Monitor className="h-6 w-6 text-primary" />,
        color: "primary",
        skills: [
            { name: "React.js",     logo: `${DEVICON_BASE}/react/react-original.svg` },
            { name: "HTML5",        logo: `${DEVICON_BASE}/html5/html5-original.svg` },
            { name: "CSS3",         logo: `${DEVICON_BASE}/css3/css3-original.svg` },
            { name: "JavaScript",   logo: `${DEVICON_BASE}/javascript/javascript-original.svg` },
            { name: "Tailwind CSS", logo: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg` },
            { name: "Bootstrap",    logo: `${DEVICON_BASE}/bootstrap/bootstrap-original.svg` },
        ]
    },
    {
        title: "Backend",
        icon: <Server className="h-6 w-6 text-secondary" />,
        color: "secondary",
        skills: [
            { name: "Node.js", logo: `${DEVICON_BASE}/nodejs/nodejs-original.svg` },
            { name: "Express", logo: `${DEVICON_BASE}/express/express-original.svg` },
            { name: "PHP",     logo: `${DEVICON_BASE}/php/php-original.svg` },
        ]
    },
    {
        title: "Programming Languages",
        icon: <Code2 className="h-6 w-6 text-primary" />,
        color: "primary",
        skills: [
            { name: "C++",    logo: `${DEVICON_BASE}/cplusplus/cplusplus-original.svg` },
            { name: "Java",   logo: `${DEVICON_BASE}/java/java-original.svg` },
            { name: "Python", logo: `${DEVICON_BASE}/python/python-original.svg` },
            { name: "C",      logo: `${DEVICON_BASE}/c/c-original.svg` },
        ]
    },
    {
        title: "Databases & Tools",
        icon: <Database className="h-6 w-6 text-secondary" />,
        color: "secondary",
        skills: [
            { name: "MongoDB", logo: `${DEVICON_BASE}/mongodb/mongodb-original.svg` },
            { name: "MySQL",   logo: `${DEVICON_BASE}/mysql/mysql-original.svg` },
            { name: "Git",     logo: `${DEVICON_BASE}/git/git-original.svg` },
            { name: "GitHub",  logo: `${DEVICON_BASE}/github/github-original.svg` },
            { name: "VS Code", logo: `${DEVICON_BASE}/vscode/vscode-original.svg` },
            { name: "Postman", logo: `${DEVICON_BASE}/postman/postman-original.svg` },
            { name: "Figma",   logo: `${DEVICON_BASE}/figma/figma-original.svg` },
        ]
    },
    {
        title: "Domain Skills",
        icon: <BrainCircuit className="h-6 w-6 text-primary" />,
        color: "primary",
        skills: [
            { name: "Data Structures", logo: null, emoji: "🧩" },
            { name: "Algorithms",      logo: null, emoji: "⚡" },
            { name: "OOP",             logo: null, emoji: "🔷" },
            { name: "Web Dev",         logo: null, emoji: "🌐" },
            { name: "REST APIs",       logo: null, emoji: "🔗" },
        ]
    },
];

/* ─── Soft Skills ─── */
const softSkills = [
    {
        name: "Work Ethic",
        icon: <Flame className="w-7 h-7 text-orange-400" />,
        description: "Consistently putting in focused effort and going the extra mile to deliver quality work.",
        gradient: "from-orange-500/10 to-transparent"
    },
    {
        name: "Reliable",
        icon: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
        description: "Dependable and consistent — teammates and managers can count on me to follow through.",
        gradient: "from-emerald-500/10 to-transparent"
    },
    {
        name: "Adaptive",
        icon: <Zap className="w-7 h-7 text-yellow-400" />,
        description: "Quick to embrace new technologies, workflows, and challenges with a positive mindset.",
        gradient: "from-yellow-500/10 to-transparent"
    },
    {
        name: "Time Management",
        icon: <Clock className="w-7 h-7 text-blue-400" />,
        description: "Effective at prioritizing tasks, meeting deadlines, and balancing multiple responsibilities.",
        gradient: "from-blue-500/10 to-transparent"
    },
    {
        name: "Decision Making",
        icon: <GitBranch className="w-7 h-7 text-purple-400" />,
        description: "Analytical and decisive — able to evaluate options clearly and act with confidence.",
        gradient: "from-purple-500/10 to-transparent"
    },
];

export default function Skills() {
    const [section, setSection] = useState('Technical');

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        A look at both my technical toolkit and the personal qualities I bring to every project.
                    </p>
                </motion.div>

                {/* Top-level Section Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex justify-center gap-3 mb-10"
                >
                    {['Technical', 'Soft Skills'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSection(tab)}
                            className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                section === tab
                                    ? 'bg-gradient-to-r from-primary to-indigo-500 text-white shadow-[0_0_18px_rgba(99,102,241,0.45)]'
                                    : 'bg-card text-text/60 border border-white/10 hover:border-primary/40 hover:text-text'
                            }`}
                        >
                            {tab === 'Technical' ? '💻 Technical Skills' : '🤝 Soft Skills'}
                        </button>
                    ))}
                </motion.div>

                <AnimatePresence mode="wait">

                    {/* ── Technical Skills ── */}
                    {section === 'Technical' && (
                        <motion.div
                            key="technical"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Category Cards */}
                            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <AnimatePresence>
                                    {techCategories.map((category) => (
                                        <motion.div
                                            layout
                                            key={category.title}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.35 }}
                                            className="flex flex-col bg-card rounded-2xl p-7 border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg relative overflow-hidden group"
                                        >
                                            <div className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${category.color === 'primary' ? 'bg-gradient-to-br from-primary/15 to-transparent' : 'bg-gradient-to-br from-secondary/15 to-transparent'}`} />

                                            <div className="flex items-center gap-4 mb-7 relative z-10">
                                                <div className="p-3 bg-background rounded-xl border border-white/5 shadow-inner">
                                                    {category.icon}
                                                </div>
                                                <h2 className="text-xl font-bold tracking-tight">{category.title}</h2>
                                            </div>

                                            <div className="flex flex-wrap gap-3 relative z-10">
                                                {category.skills.map((skill, sIdx) => (
                                                    <motion.div
                                                        key={sIdx}
                                                        initial={{ opacity: 0, scale: 0.85 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.25, delay: sIdx * 0.05 }}
                                                        whileHover={{ scale: 1.08, y: -2 }}
                                                        className="flex items-center gap-2 px-3 py-2 bg-background rounded-xl border border-white/5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 cursor-default"
                                                    >
                                                        {skill.logo ? (
                                                            <img src={skill.logo} alt={skill.name} className="w-5 h-5 object-contain" />
                                                        ) : (
                                                            <span className="text-base leading-none">{skill.emoji}</span>
                                                        )}
                                                        <span className="text-sm font-medium text-text/85 whitespace-nowrap">{skill.name}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* ── Soft Skills ── */}
                    {section === 'Soft Skills' && (
                        <motion.div
                            key="soft"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {softSkills.map((skill, idx) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 28 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    whileHover={{ y: -4 }}
                                    className="flex flex-col group bg-card rounded-2xl p-7 border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg relative overflow-hidden cursor-default"
                                >
                                    {/* Glow */}
                                    <div className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon */}
                                        <div className="p-3 bg-background rounded-xl border border-white/5 shadow-inner w-fit mb-5">
                                            {skill.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                            {skill.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-text/60 leading-relaxed">
                                            {skill.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                </AnimatePresence>

            </div>
        </div>
    );
}
