import { ArrowRight, Calendar, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Img_Url } from '../store/api';

const Blog = () => {
    const posts = useSelector((state: RootState) => state.content.blogPosts);

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-primary mb-4">Our Blog</h2>
                    <p className="text-gray-600">Latest news and insights from the construction world.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post: any, idx: number) => (
                        <div key={post.id || idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                            <div className="h-48 overflow-hidden bg-gray-100">
                                <img
                                    src={post.imageUrl ? (post.imageUrl.startsWith('http') ? post.imageUrl : `${Img_Url}${post.imageUrl}`) : 'https://images.unsplash.com/photo-1541888081622-4a0b2eb307c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
                                    alt={post.title || 'Blog Post'}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1541888081622-4a0b2eb307c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'; }}
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex gap-4 text-xs text-gray-400 mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'N/A'}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User size={12} />
                                        {post.author || 'Admin'}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-brand-primary mb-3 leading-tight group-hover:text-brand-secondary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.content}</p>
                                <a
                                    href={post.link || '#'}
                                    target={post.link ? "_blank" : "_self"}
                                    rel={post.link ? "noopener noreferrer" : ""}
                                    className="flex items-center gap-1 text-brand-secondary font-semibold text-sm hover:gap-2 transition-all"
                                >
                                    Read More <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
