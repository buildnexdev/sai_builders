import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    logo: localStorage.getItem('company_logo') || '', // Persist logo
    services: [
        {
            title: 'Residential Construction',
            desc: 'Building custom homes that reflect your lifestyle and personality. From design to key handover.',
            img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'Commercial Projects',
            desc: 'Efficient and professional construction solutions for offices, retail spaces, and industrial facilities.',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'Renovations & Remodeling',
            desc: 'Transforming existing spaces into modern, functional environments with minimum disruption.',
            img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
        }
    ],
    projects: [
        { id: 1, category: 'Residential', title: 'Modern Villa', img: 'https://images.unsplash.com/photo-1600585154340-be6199f7d009?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 2, category: 'Commercial', title: 'City Office Complex', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 3, category: 'Renovations', title: 'Heritage Restoration', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 4, category: 'Residential', title: 'Luxury Apartments', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 5, category: 'Commercial', title: 'Tech Park', img: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 6, category: 'Renovations', title: 'Kitchen Remodel', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    ],
    // testimonials: [
    //     {
    //         name: 'Robert Miller',
    //         role: 'Homeowner',
    //         content: 'Sai Builders turned our dream home into a reality. The attention to detail and dedication of the team was outstanding.',
    //         rating: 5,
    //     },
    //     {
    //         name: 'Sarah Jenkins',
    //         role: 'Business Owner',
    //         content: 'We hired them for our new office complex. They delivered on time and within budget. Highly professional!',
    //         rating: 5,
    //     },
    //     {
    //         name: 'David Wilson',
    //         role: 'Real Estate Developer',
    //         content: 'Excellent build quality and safety standards. I have worked with many contractors, but they are the best.',
    //         rating: 5,
    //     },
    // ],
    blogPosts: [
        {
            title: 'Top 10 Home Renovation Trends for 2026',
            date: 'Feb 10, 2026',
            author: 'Admin',
            img: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            excerpt: 'Discover the latest styles and technologies shaping modern homes this year.',
        },
        {
            title: 'Sustainable Building Materials Explained',
            date: 'Jan 25, 2026',
            author: 'Expert',
            img: 'https://images.unsplash.com/photo-1590059390047-5804ee5d3904?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            excerpt: 'How choices in materials can impact the environment and your long-term costs.',
        },
        {
            title: 'Understanding Commercial Construction Permits',
            date: 'Jan 10, 2026',
            author: 'Legal',
            img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            excerpt: 'A comprehensive guide to navigating the complex world of building permits.',
        }
    ],
    team: [
        { name: 'Noun Sattes', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
        { name: 'Mone Mapt', role: 'Chief Architect', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
        { name: 'Nour Cillents', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    ],
    timeline: [
        { year: '2005', title: 'Founded', desc: 'Started with small residential projects.' },
        { year: '2012', title: 'Expanded', desc: 'Moved into commercial construction.' },
        { year: '2020', title: 'Industry Leaders', desc: 'Recognized as top builders in the region.' },
        { year: '2026', title: 'Innovation', desc: 'Adopting sustainable green building practices.' },
    ]
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setLogo: (state, action) => {
            state.logo = action.payload;
            localStorage.setItem('company_logo', action.payload);
        }
    },
});

export const { setLogo } = contentSlice.actions;

export default contentSlice.reducer;
