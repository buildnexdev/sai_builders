// import React from 'react';
// import { Star, Quote } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import type { RootState } from '../store/store';

// const Testimonials = () => {
//     const reviews = useSelector((state: RootState) => state.content.testimonials);



//     return (
//         <section id="testimonials" className="py-20 bg-brand-primary text-white">
//             <div className="container mx-auto px-4 md:px-8">
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
//                     <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"></div>
//                 </div>

//                 <div className="grid md:grid-cols-3 gap-8 mb-20">
//                     {reviews.map((review, idx) => (
//                         <div key={idx} className="bg-brand-dark/30 p-8 rounded-xl relative border border-white/10 backdrop-blur-sm">
//                             <Quote className="absolute top-6 right-6 text-brand-secondary/20" size={64} />
//                             <div className="flex gap-1 text-brand-secondary mb-4">
//                                 {[...Array(review.rating)].map((_, i) => (
//                                     <Star key={i} size={16} fill="currentColor" />
//                                 ))}
//                             </div>
//                             <p className="text-gray-300 italic mb-6 leading-relaxed relative z-10">"{review.content}"</p>
//                             <div>
//                                 <h4 className="font-bold text-lg">{review.name}</h4>
//                                 <span className="text-gray-400 text-sm">{review.role}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;
