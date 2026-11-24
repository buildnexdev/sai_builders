import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Img_Url } from '../store/api';

const FALLBACK_PROJECT_IMAGE = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231e293b%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%2394a3b8%22%20font-size%3D%2220%22%20font-family%3D%22sans-serif%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EProject%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const projects = useSelector((state: RootState) => state.content.projects);

    const categories = ['All', 'Residential', 'Commercial', 'Renovations'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter((project: any) => project.category === filter);

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">Featured Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Explore our portfolio of delivered excellence. We bring visions to life with precision, dedication, and superior craftsmanship.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-brand-primary text-white shadow-md'
                                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-brand-primary shadow-sm border border-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project: any) => (
                        <div key={project.id} className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                            {/* Image Container */}
                            <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={project.imageUrl && !project.imageUrl.startsWith('images/') ? (project.imageUrl.startsWith('http') ? project.imageUrl : `${Img_Url}${project.imageUrl}`) : FALLBACK_PROJECT_IMAGE}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e: any) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = FALLBACK_PROJECT_IMAGE;
                                    }}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-brand-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-brand-primary mb-2 line-clamp-2">
                                        {project.title}
                                    </h3>
                                    {project.description && (
                                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                            {project.description}
                                        </p>
                                    )}
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
