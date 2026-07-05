import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, User, MessageSquare, Send, ExternalLink, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        details: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1200);
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            details: ''
        });
        setIsSubmitted(false);
    };

    return (
        <section id="contact" className="py-24 bg-[#FAFCFC]">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-4">Contact Us</h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
                        Have a project in mind or need a quote? Reach out to our team of experts and let's build something exceptional together.
                    </p>
                    <div className="w-16 h-1 bg-brand-secondary mx-auto mt-5 rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
                    {/* Contact Form Card */}
                    <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_45px_-12px_rgba(0,0,0,0.04)]">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-brand-primary mb-2">Get a Free Quote</h3>
                            <p className="text-gray-500 text-sm">Fill out the form below and we will get back to you within 24 hours.</p>
                        </div>

                        {isSubmitted ? (
                            <div className="text-center py-12 px-4 flex flex-col items-center justify-center">
                                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce shadow-md">
                                    <CheckCircle size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-primary mb-2">Message Sent!</h3>
                                <p className="text-gray-600 mb-8 max-w-xs leading-relaxed text-sm">
                                    Thank you, <span className="font-semibold text-brand-primary">{formData.firstName}</span>. 
                                    We have received your message and our team will get in touch with you shortly.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm transition-all"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            placeholder="First Name"
                                            className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary focus:bg-white transition-all text-sm text-gray-800"
                                        />
                                    </div>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            placeholder="Last Name"
                                            className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary focus:bg-white transition-all text-sm text-gray-800"
                                        />
                                    </div>
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="Email Address"
                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary focus:bg-white transition-all text-sm text-gray-800"
                                    />
                                </div>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="Phone Number"
                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary focus:bg-white transition-all text-sm text-gray-800"
                                    />
                                </div>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 text-gray-400 pointer-events-none" size={18} />
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.details}
                                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                        placeholder="Project Details"
                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary focus:bg-white transition-all text-sm text-gray-800 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-brand-secondary to-[#1d8291] hover:from-[#1d8291] hover:to-[#176a77] text-white font-bold py-3.5 rounded-xl shadow-md shadow-brand-secondary/15 hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info & Map */}
                    <div className="lg:col-span-6 space-y-8">
                        {/* Director Profile Card */}
                        <div className="bg-gradient-to-br from-brand-primary to-[#0e2340] rounded-3xl shadow-xl p-6 text-white relative overflow-hidden group border border-white/5">
                            {/* Decorative background glow */}
                            <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-brand-secondary opacity-20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500"></div>
                            
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                                <div className="relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-brand-secondary rounded-full opacity-20 transform scale-110 blur-[1px]"></div>
                                    <img
                                        src="https://ui-avatars.com/api/?name=Karthi+Director&size=150&background=239EB0&color=fff&bold=true"
                                        alt="Karthi - Director"
                                        className="w-20 h-20 rounded-full object-cover border-[3px] border-white/10 shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="flex-1 text-center sm:text-left">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1.5 justify-center sm:justify-start">
                                        <h3 className="text-2xl font-bold tracking-tight">Karthi</h3>
                                        <span className="inline-block px-3 py-1 bg-brand-secondary/20 border border-brand-secondary/30 text-brand-secondary text-[10px] font-bold uppercase tracking-widest rounded-full w-max mx-auto sm:mx-0">
                                            Director
                                        </span>
                                    </div>
                                    <p className="text-gray-400 font-medium text-xs uppercase tracking-wider mb-3">Leadership / Executive Board</p>
                                    
                                    <blockquote className="text-gray-300 italic text-sm border-l-2 border-brand-secondary/40 pl-3 py-1 mb-4 leading-relaxed text-left">
                                        "At Sai Builders, we don't just build structures; we craft relationships and bring your dreams to life with uncompromising quality."
                                    </blockquote>

                                    <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                                        <a href="tel:+917904407012" className="flex items-center gap-2 bg-brand-secondary/15 hover:bg-brand-secondary/25 border border-brand-secondary/35 px-4 py-2 rounded-xl text-xs font-semibold text-brand-secondary transition-all">
                                            <Phone size={12} /> Call Director
                                        </a>
                                        <a href="mailto:saibuildersofficial@gmail.com" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 transition-all">
                                            <Mail size={12} /> Email
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Card 1: Location */}
                            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-brand-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-4 group-hover:scale-105 transition-transform duration-300">
                                        <MapPin size={20} />
                                    </div>
                                    <h4 className="font-bold text-brand-primary mb-1.5 text-base">Our Location</h4>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                                        10-1-63A/5, Anna Nagar Road,<br />
                                        Anna Nagar, Pattiveeranpatti,<br />
                                        Tamil Nadu - 624211
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Call Us */}
                            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-brand-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-4 group-hover:scale-105 transition-transform duration-300">
                                        <Phone size={20} />
                                    </div>
                                    <h4 className="font-bold text-brand-primary mb-1.5 text-base">Call Us</h4>
                                    <div className="space-y-1">
                                        <a href="tel:+917904407012" className="text-gray-500 text-xs md:text-sm hover:text-brand-secondary transition-colors block font-medium">+91 7904407012</a>
                                        <a href="tel:+919786810186" className="text-gray-500 text-xs md:text-sm hover:text-brand-secondary transition-colors block font-medium">+91 9786810186</a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Email Us */}
                            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-brand-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-4 group-hover:scale-105 transition-transform duration-300">
                                        <Mail size={20} />
                                    </div>
                                    <h4 className="font-bold text-brand-primary mb-1.5 text-base">Email Us</h4>
                                    <a href="mailto:saibuildersofficial@gmail.com" className="text-gray-500 text-xs md:text-sm hover:text-brand-secondary transition-colors block font-medium break-all">
                                        saibuildersofficial@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Card 4: Working Hours */}
                            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-brand-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-4 group-hover:scale-105 transition-transform duration-300">
                                        <Clock size={20} />
                                    </div>
                                    <h4 className="font-bold text-brand-primary mb-1.5 text-base">Working Hours</h4>
                                    <p className="text-gray-500 text-xs md:text-sm font-medium">Mon - Fri</p>
                                    <p className="text-gray-400 text-xs mt-0.5">9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Google Map Widget */}
                        <div className="border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-sm group">
                            <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 bg-brand-secondary rounded-full animate-pulse"></div>
                                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Our Head Office Location</span>
                                </div>
                                <a
                                    href="https://www.google.com/maps/place/Sai+Builders,+10-1-63A%2F5,+Anna+Nagar+Road,+Anna+Nagar,+Pattiveeranpatti,+Tamil+Nadu+624211/data=!4m2!3m1!1s0x3b07512e94a565a1:0x4f988930034d1f35"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs font-bold text-brand-secondary hover:text-[#1d8291] transition-colors"
                                >
                                    Open in Maps <ExternalLink size={12} />
                                </a>
                            </div>
                            <div className="h-64 relative bg-gray-50">
                                <iframe
                                    title="Sai Builders Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.564!2d77.785!3d10.165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07512e94a565a1%3A0x4f988930034d1f35!2sSai%20Builders!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full opacity-95 transition-opacity group-hover:opacity-100"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
