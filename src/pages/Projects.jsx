import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "LearnSphere",
            description: "A centralized learning platform designed for organized and efficient access to learning resources with structured content display and smooth navigation.",
            techStack: ["React.js", "Node.js", "MongoDB"],
            github: "https://github.com/Rahulkala013/LearnSphere",
            category: "Full Stack"
        },
        {
            id: 2,
            title: "Algo Visualizer",
            description: "A visual tool that demonstrates algorithms such as Merge Sort, Quick Sort, Bubble Sort, BFS, and DFS through animations and step-by-step execution.",
            techStack: ["React.js", "JavaScript", "HTML", "Tailwind CSS"],
            github: "https://github.com/Rahulkala013/Algo-viz",
            category: "Frontend"
        },
        {
            id: 3,
            title: "Fit Flow",
            description: "A fitness platform that allows users to access workout plans, track progress, and manage personalized fitness routines.",
            techStack: ["HTML", "Tailwind CSS", "JavaScript", "PHP"],
            github: "https://github.com/Rahulkala013/Fitflow",
            category: "Full Stack"
        }
    ];

    const filterOptions = ["All", "Full Stack", "Frontend"];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        Explore my latest work showcasing skills in full-stack development, frontend engineering, and algorithm visualization.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {filterOptions.map(option => (
                        <button
                            key={option}
                            onClick={() => setFilter(option)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === option
                                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                                    : 'bg-card text-text/70 border border-white/10 hover:border-primary/50 hover:text-text'
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                className="bg-card rounded-2xl overflow-hidden border border-white/5 flex flex-col group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                {/* Project Image Placeholder - dynamically generated styled background */}
                                <div className="h-48 relative overflow-hidden w-full bg-gradient-to-br from-background to-card flex items-center justify-center border-b border-white/5">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                    <Code className="h-20 w-20 text-text/10 group-hover:text-primary/20 transition-colors duration-500 scale-110 group-hover:scale-125" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full text-text hover:text-primary hover:scale-110 transition-all shadow-lg mx-2 border border-white/10">
                                            <Github className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                                        {project.title}
                                    </h3>
                                    <p className="text-text/70 mb-6 flex-grow line-clamp-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-medium rounded-md bg-background border border-white/5 text-text/80">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="pt-4 border-t border-white/5 flex justify-between items-center mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-text/60 hover:text-primary transition-colors"
                                        >
                                            <Github className="w-4 h-4 mr-2" /> Source Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    );
}
