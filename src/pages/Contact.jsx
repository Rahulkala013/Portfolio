import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // TODO: Replace 'YOUR_ACCESS_KEY_HERE' with your actual access key from https://web3forms.com/
            // It's completely free and doesn't require an account, just your email.
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "", // GET YOUR KEY AT: https://web3forms.com/
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });
            const result = await response.json();

            if (result.success) {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error("Form submission failed", result);
                setIsSubmitting(false);
                alert("Something went wrong with the form submission. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setIsSubmitting(false);
            alert("Something went wrong. Please check your internet connection and try again.");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            title: "Email",
            value: "rahulkala013@gmail.com",
            link: "mailto:rahulkala013@gmail.com",
            icon: <Mail className="w-6 h-6 text-primary" />
        },
        {
            title: "Phone",
            value: "+91 9997603996",
            link: "tel:+919997603996",
            icon: <Phone className="w-6 h-6 text-secondary" />
        },
        {
            title: "Location",
            value: "Kotdwar, Uttarakhand, India",
            link: null,
            icon: <MapPin className="w-6 h-6 text-indigo-400" />
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out through the form below or using my contact details.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 lg:pr-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <p className="text-text/70 mb-8 leading-relaxed">
                                I am actively looking for new opportunities as a Full Stack Developer. If you think I would be a great fit for your team, please let me know.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex items-start bg-card/50 p-4 rounded-xl border border-white/5 hover:bg-card transition-colors">
                                    <div className="p-3 bg-background rounded-lg border border-white/10 shrink-0">
                                        {info.icon}
                                    </div>
                                    <div className="ml-4 flex-grow overflow-hidden">
                                        <h3 className="text-sm font-medium text-text/50 uppercase tracking-wider mb-1">{info.title}</h3>
                                        {info.link ? (
                                            <a href={info.link} className="text-lg font-medium text-text hover:text-primary transition-colors truncate block">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="text-lg font-medium text-text break-words block">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 mt-8 border-t border-white/10">
                            <h3 className="text-lg font-bold mb-4">Connect with me</h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/Rahulkala013" target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-full hover:-translate-y-2 hover:bg-white/10 transition-all shadow-lg border border-white/5">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/rahulkala013/" target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-full hover:-translate-y-2 hover:bg-blue-500/20 hover:text-blue-400 transition-all shadow-lg border border-white/5">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-card rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-bl-full blur-[80px] -z-10 text-primary"></div>

                        <h2 className="text-2xl font-bold mb-8">Send me a message</h2>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center p-8 text-center bg-green-500/10 border border-green-500/20 rounded-2xl h-[400px]"
                            >
                                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                                <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                                <p className="text-text/70">Thank you for reaching out. I will get back to you as soon as possible.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text/70 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text/70 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text/70 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                        placeholder="Hello Rahul, I'd like to discuss..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Send Message <Send className="ml-2 h-5 w-5" />
                                        </span>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
