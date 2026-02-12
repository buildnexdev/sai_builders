
const About = () => {
    return (
        <section id="about" className="py-20 bg-brand-light">
            <div className='text-center text-4xl font-bold text-brand-primary mb-8'>About Us</div>
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block p-1 bg-gray-200 rounded-full mb-6">
                        <span className="block w-24 h-1 bg-brand-secondary rounded-full"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-8 leading-tight">
                        Sai Builders: 7 Years of Excellence in Every Square Foot.
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            With seven years of proven expertise, Sai Builders specializes in transforming visions into architectural realities.
                            We take pride in our commitment to superior craftsmanship, timely delivery, and structural integrity.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Whether it’s a modern residential home or a commercial landmark, we build with a focus on quality that stands the test of time.
                            Your dream project deserves a foundation built on experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
