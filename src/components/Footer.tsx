import { Facebook, Twitter, Instagram, Youtube, Heart, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/saibulidersLogo1.png';

const Footer = () => {
    return (
        <footer className="bg-brand-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center transform hover:scale-105 transition-transform">
                                <img src={logo} alt="Sai Builders Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white font-outfit">SaiBuilders</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Architecting excellence and building trust since 2017. Transforming your visions into structural realities with superior craftsmanship.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: "#", label: "Facebook" },
                                { Icon: Twitter, href: "#", label: "Twitter" },
                                { Icon: Instagram, href: "https://www.instagram.com/sai__builders?igsh=ZzRoMWVma3drbmV5", label: "Instagram" },
                                { Icon: Youtube, href: "https://www.youtube.com/@saibuilders", label: "Youtube" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-all duration-300 border border-white/10"
                                >
                                    <social.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-secondary rounded"></span>
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '')}`}
                                        className="hover:text-brand-secondary hover:translate-x-2 transition-all flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-secondary rounded"></span>
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {['General Contracting', 'Design & Build', 'Renovations', 'Interior Design'].map((service) => (
                                <li key={service} className="hover:text-brand-secondary transition-colors cursor-pointer flex items-center gap-2">
                                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-secondary rounded"></span>
                        </h4>
                        <ul className="space-y-5 text-sm text-gray-400">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-brand-secondary flex-shrink-0" size={20} />
                                <span>10-1-63A/5, Anna Nagar Road, Pattiveeranpatti, Tamil Nadu - 624211</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-brand-secondary flex-shrink-0" size={20} />
                                <div className="flex flex-col">
                                    <a href="tel:+917904407012" className="hover:text-white transition-colors">+91 7904407012</a>
                                    <a href="tel:+919786810186" className="hover:text-white transition-colors">+91 9786810186</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-brand-secondary flex-shrink-0" size={20} />
                                <a href="mailto:saibuildersofficial@gmail.com" className="hover:text-white transition-colors">saibuildersofficial@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Sai Builders. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Designed with <Heart size={14} className="text-red-500 animate-pulse" fill="currentColor" /> by <span className="text-white font-semibold"><a href="http://buildnexdev.co.in/" target="_blank" rel="noopener noreferrer">BuildNexDev</a></span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
