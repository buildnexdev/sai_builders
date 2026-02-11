import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/saibulidersLogo1.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        // { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out py-4 ${isScrolled
                    ? 'bg-brand-primary/80 backdrop-blur-lg shadow-lg py-3'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500">
                {/* Logo Section */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        {logo ? (
                            <img
                                src={logo}
                                alt="Sai Builders Logo"
                                className={`transition-all duration-500 rounded border border-white/10 ${isScrolled ? 'h-10' : 'h-14'
                                    } w-auto object-contain hover:scale-105`}
                            />
                        ) : (
                            <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:rotate-12 transition-transform">
                                SB
                            </div>
                        )}
                        {/* Glow effect on logo */}
                        {!isScrolled && (
                            <div className="absolute -inset-1 bg-brand-secondary/20 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                        )}
                    </div>
                    {logo && (
                        <span className={`font-bold transition-all duration-500 tracking-tight ${isScrolled ? 'text-xl' : 'text-2xl'
                            } text-white`}>
                            Sai<span className="text-brand-secondary">Builders</span>
                        </span>
                    )}
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-white/80 hover:text-white text-[15px] font-medium transition-all group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="relative overflow-hidden bg-brand-secondary hover:bg-orange-600 text-white px-7 py-3 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-orange-500/30 active:scale-95 group"
                    >
                        <span className="relative z-10 uppercase tracking-wider">Get A Quote</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'bg-white/10' : 'hover:bg-white/10'
                        } text-white focus:outline-none`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-x-0 top-[72px] transition-all duration-500 ease-in-out ${isMenuOpen
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                    }`}
            >
                <div className="mx-4 bg-brand-primary/95 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 flex flex-col gap-5 shadow-2xl overflow-hidden relative">
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg font-semibold hover:text-brand-secondary transition-colors border-b border-white/5 pb-2"
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-brand-secondary text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-transform"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Get A Quote
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
