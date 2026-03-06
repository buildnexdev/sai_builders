import { useState, useEffect } from 'react';
import { API_URL, Img_Url } from '../store/api';

const Hero = () => {
    const [images, setImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const companyId = 2;
                // Append '?category=YourCategory' to the URL if you need a specific category
                const response = await fetch(`${API_URL}active/banners/${companyId}?category=Builders`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const jsonResponse = await response.json();

                    let extractedImages: string[] = [];
                    // Check if the structure matches the provided backend: { success: true, data: [...] }
                    if (jsonResponse.success && Array.isArray(jsonResponse.data)) {
                        extractedImages = jsonResponse.data.map((item: any) => {
                            const imgPath = item.imagePath || item.imageUrl || item.image || item.path;
                            if (imgPath) {
                                // Prepend the S3 base URL if the path is relative
                                return imgPath.startsWith('http') ? imgPath : `${Img_Url}${imgPath}`;
                            }
                            return '';
                        });
                    }

                    // Filter out any empty strings and slice to get max 5 images
                    extractedImages = extractedImages.filter(img => img).slice(0, 5);

                    if (extractedImages.length > 0) {
                        setImages(extractedImages);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch banner images:', error);
            }
        };

        fetchBanners();
    }, []);

    useEffect(() => {
        if (images.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // 10 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background Images with Overlay */}
            <div className="absolute inset-0 z-0">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-7000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Construction Site ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                {/* Dark Blue Overlay */}
                <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply z-10"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20 pt-20">
                <div className="max-w-3xl text-white">
                    <div className="mb-4 flex items-center gap-2">
                        <span className="h-1 w-12 bg-brand-secondary inline-block"></span>
                        <span className="uppercase tracking-widest text-sm font-semibold text-gray-300">Quality Construction Solutions</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Building Your Dreams <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Into Reality</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light">
                        We are a team of dedicated professionals committed to delivering excellence in every project. From residential to commercial, we build with precision and passion.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="bg-brand-accent hover:bg-red-700 text-white text-center px-8 py-4 rounded font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-lg shadow-red-500/30">
                            Get A Quote
                        </a>
                        <a href="#projects" className="border-2 border-white hover:bg-white hover:text-brand-primary text-white text-center px-8 py-4 rounded font-bold uppercase tracking-wider transition-all">
                            View Projects
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-20">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white mt-2 rounded-full"></div>
                </div>
            </div> */}
        </section>
    );
};

export default Hero;
