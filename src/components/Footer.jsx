import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-background/20 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-text/70 text-sm">
                            &copy; {currentYear} Rahul Kala. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/Rahulkala013" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-primary transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/rahulkala013/" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-primary transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="mailto:rahulkala013@gmail.com" className="text-text/70 hover:text-primary transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
