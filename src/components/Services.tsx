import React from 'react';
import { Home, Building2, Ruler } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const Services = () => {
    const services = useSelector((state: RootState) => state.content.services);

    const getIcon = (index: number) => {
        switch (index) {
            case 0: return <Home size={24} />;
            case 1: return <Building2 size={24} />;
            case 2: return <Ruler size={24} />;
            default: return <Home size={24} />;
        }
    }

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-primary mb-4">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive construction services tailored to meet diverse needs with precision and excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="h-48 overflow-hidden">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                            </div>
                            <div className="p-8">
                                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center text-brand-secondary mb-4">
                                    {getIcon(idx)}
                                </div>
                                <h3 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                                <button className="px-6 py-2 bg-brand-primary text-white text-sm font-semibold rounded hover:bg-brand-secondary transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
