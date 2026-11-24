import { ArrowRight, Calendar, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Img_Url } from '../store/api';

const FALLBACK_BLOG_IMAGE = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231e293b%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%2394a3b8%22%20font-size%3D%2222%22%20font-family%3D%22sans-serif%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3ESai%20Builders%20Blog%3C%2Ftext%3E%3C%2Fsvg%3E';

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
                                    src={post.imageUrl && !post.imageUrl.startsWith('images/') ? (post.imageUrl.startsWith('http') ? post.imageUrl : `${Img_Url}${post.imageUrl}`) : FALLBACK_BLOG_IMAGE}
                                    alt={post.title || 'Blog Post'}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e: any) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = FALLBACK_BLOG_IMAGE;
                                    }}
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
