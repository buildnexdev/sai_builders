import { Home, Building2, Ruler } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Img_Url } from '../store/api';

const FALLBACK_SERVICE_IMAGE = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231e293b%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%2394a3b8%22%20font-size%3D%2220%22%20font-family%3D%22sans-serif%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EService%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';

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
                    {services.map((service: { imageUrl: string; title: string; description: string }, idx: number) => (
                        <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={service.imageUrl && !service.imageUrl.startsWith('images/') ? (service.imageUrl.startsWith('http') ? service.imageUrl : `${Img_Url}${service.imageUrl}`) : FALLBACK_SERVICE_IMAGE}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    onError={(e: any) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = FALLBACK_SERVICE_IMAGE;
                                    }}
                                />
                            </div>
                            <div className="p-8">
                                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center text-brand-secondary mb-4">
                                    {getIcon(idx)}
                                </div>
                                <h3 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
