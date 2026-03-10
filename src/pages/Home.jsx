import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Code2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import resumePdf from '../assets/CV_Rahul_Kala.pdf';
import profilePhoto from '../assets/profilephoto.jpeg';
export default function Home() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="text-left"
                        >
                            <motion.div variants={fadeIn} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                                <span className="flex w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                Available for New Opportunities
                            </motion.div>

                            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Rahul Kala</span>
                            </motion.h1>

                            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl text-text/80 font-medium mb-6">
                                Full Stack Developer
                            </motion.h2>

                            <motion.p variants={fadeIn} className="text-lg text-text/70 mb-8 max-w-xl leading-relaxed">
                                Building modern web applications and solving problems through clean and scalable code.
                                I am a Computer Science and Engineering student with a strong passion for full-stack web development.
                            </motion.p>

                            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                                <Link to="/projects" className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium flex items-center transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link to="/contact" className="px-6 py-3 rounded-xl bg-card border border-card-hover hover:border-primary/50 text-text font-medium flex items-center transition-all hover:scale-105 active:scale-95">
                                    Contact Me <Mail className="ml-2 h-4 w-4" />
                                </Link>
                                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-card border border-card-hover hover:border-secondary/50 text-text font-medium flex items-center transition-all hover:scale-105 active:scale-95">
                                    Resume <Download className="ml-2 h-4 w-4" />
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative mx-auto lg:ml-auto"
                        >
                            <div className="relative w-72 h-72 md:w-96 md:h-96">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-spin-slow opacity-20 blur-2xl"></div>
                                <div className="absolute inset-2 bg-card rounded-full border-2 border-primary/20 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                                    {/* Since we don't have a real photo yet, use a premium placeholder or abstract shapes */}
                                    <img
                                        src={profilePhoto}
                                        alt="Rahul Kala"
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-6 p-4 bg-card rounded-xl border border-white/10 shadow-xl"
                                >
                                    <Code2 className="h-8 w-8 text-primary" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-6 -left-6 p-4 bg-card rounded-xl border border-white/10 shadow-xl"
                                >
                                    <Database className="h-8 w-8 text-secondary" />
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Skills Preview Section */}
            <section className="py-24 bg-card/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Frontend", icon: <Terminal className="h-6 w-6" />, desc: "React.js, Tailwind CSS, modern responsive UI/UX" },
                            { title: "Backend", icon: <Database className="h-6 w-6" />, desc: "Node.js, PHP, RESTful APIs, scalable architecture" },
                            { title: "Problem Solving", icon: <Code2 className="h-6 w-6" />, desc: "Data Structures, Algorithms in C++ & Java" }
                        ].map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 hover:-translate-y-2 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                                <p className="text-text/70">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/skills" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                            Explore All Skills <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="flex justify-between items-end mb-12"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                        </div>
                        <Link to="/projects" className="hidden md:flex items-center text-text/70 hover:text-primary transition-colors">
                            View All <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden bg-card border border-white/5"
                        >
                            <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-primary/50 font-bold text-4xl">LearnSphere</div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <Link to="/projects" className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:scale-105 transition-transform">Details</Link>
                                    <a href="https://github.com/Rahulkala013/LearnSphere" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">GitHub</a>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">React.js</span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400">Node.js</span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400">MongoDB</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">LearnSphere</h3>
                                <p className="text-text/70 line-clamp-2">A centralized learning platform designed for organized and efficient access to learning resources with structured content display.</p>
                            </div>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative rounded-2xl overflow-hidden bg-card border border-white/5"
                        >
                            <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-teal-500/20 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-secondary/50 font-bold text-4xl">Algo Visualizer</div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <Link to="/projects" className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:scale-105 transition-transform">Details</Link>
                                    <a href="https://github.com/Rahulkala013/Algo-viz" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">GitHub</a>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">React.js</span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-400">JavaScript</span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-sky-500/10 text-sky-400">Tailwind</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Algo Visualizer</h3>
                                <p className="text-text/70 line-clamp-2">A visual tool that demonstrates algorithms such as Merge Sort, Quick Sort, BFS, and DFS through engaging animations.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/projects" className="inline-flex items-center px-6 py-3 rounded-xl bg-card border border-white/10 text-text font-medium hover:bg-white/5 transition-colors">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing Together</h2>
                        <p className="text-xl text-text/70 mb-10 max-w-2xl mx-auto">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <Link to="/contact" className="inline-flex py-4 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                            Say Hello <Mail className="ml-2 h-6 w-6" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
