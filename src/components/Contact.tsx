import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-primary mb-4">Contact Us</h2>
                    <p className="text-gray-600">Get in touch for a free consultation or quote.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-brand-primary mb-6">Get a Free Quote</h3>
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-secondary" />
                                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-secondary" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-secondary" />
                            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-secondary" />
                            <textarea rows={4} placeholder="Project Details" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-secondary"></textarea>
                            <button className="w-full bg-brand-secondary hover:bg-orange-600 text-white font-bold py-3 rounded transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-brand-secondary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-brand-primary mb-1">Our Location</h4>
                                    <p className="text-gray-600 text-sm">10-1-63A/5, Anna Nagar Road,<br />
                                        Anna Nagar, Pattiveeranpatti, <br />
                                        Tamil Nadu- 624211</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-brand-secondary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-brand-primary mb-1">Call Us</h4>
                                    <p className="text-gray-600 text-sm">+91 7904407012</p>
                                    <p className="text-gray-600 text-sm">+91 9786810186</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="text-brand-secondary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-brand-primary mb-1">Email Us</h4>
                                    <p className="text-gray-600 text-sm">saibuildersofficial@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-brand-secondary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-brand-primary mb-1">Working Hours</h4>
                                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                            <iframe
                                title="Sai Builders Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.564!2d77.785!3d10.165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07512e94a565a1%3A0x4f988930034d1f35!2sSai%20Builders!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full opacity-90"
                            ></iframe>
                            <div className="absolute bottom-4 left-4">
                                <a
                                    href="https://www.google.com/maps/place/Sai+Builders,+10-1-63A%2F5,+Anna+Nagar+Road,+Anna+Nagar,+Pattiveeranpatti,+Tamil+Nadu+624211/data=!4m2!3m1!1s0x3b07512e94a565a1:0x4f988930034d1f35"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white px-4 py-2 rounded shadow text-brand-primary font-bold hover:bg-gray-100 text-sm transition-colors"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
