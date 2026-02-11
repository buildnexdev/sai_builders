import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-8 mb-12">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-brand-secondary rounded flex items-center justify-center text-white font-bold">
                            <img src="../assets/saibulidersLogo1.png" alt="logo" />
                        </div>
                        <span className="text-white font-bold text-xl tracking-wide">SaiBuilders</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        We build more than just structures; we build trust, relationships, and the future. Committed to excellence in every brick we lay.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors"><Facebook size={16} /></a>
                        <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors"><Twitter size={16} /></a>
                        <a href="https://www.instagram.com/sai__builders?igsh=ZzRoMWVma3drbmV5" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors"><Instagram size={16} /></a>
                        <a href="https://www.instagram.com/sai__builders?igsh=ZzRoMWVma3drbmV5" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors"><Youtube size={16} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-brand-secondary transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-brand-secondary transition-colors">About Us</a></li>
                        <li><a href="#services" className="hover:text-brand-secondary transition-colors">Services</a></li>
                        <li><a href="#projects" className="hover:text-brand-secondary transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-brand-secondary transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-6">Services</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-brand-secondary transition-colors">General Contracting</a></li>
                        <li><a href="#" className="hover:text-brand-secondary transition-colors">Design & Build</a></li>
                        <li><a href="#" className="hover:text-brand-secondary transition-colors">Renovations</a></li>
                        <li><a href="#" className="hover:text-brand-secondary transition-colors">Project Management</a></li>
                        <li><a href="#" className="hover:text-brand-secondary transition-colors">Interior Design</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; 2026 Sai Builders. All rights reserved.</p>
                <p className="mt-2 flex items-center justify-center gap-1">
                    Made with <Heart size={12} className="text-red-500" fill="currentColor" /> by BulideNexDev
                </p>
            </div>
        </footer>
    );
};

export default Footer;
