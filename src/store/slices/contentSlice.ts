import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../api';

export const fetchServices = createAsyncThunk(
    'content/fetchServices',
    async (companyId: string | number = 2) => {
        const response = await fetch(`${API_URL}active/services/${companyId}`);
        if (!response.ok) throw new Error('Failed to fetch services');
        const jsonResponse = await response.json();
        return jsonResponse.success && Array.isArray(jsonResponse.data) ? jsonResponse.data : (Array.isArray(jsonResponse) ? jsonResponse : []);
    }
);

export const fetchProjects = createAsyncThunk(
    'content/fetchProjects',
    async (companyId: string | number = 2) => {
        const response = await fetch(`${API_URL}active/projects/${companyId}`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const jsonResponse = await response.json();
        return jsonResponse.success && Array.isArray(jsonResponse.data) ? jsonResponse.data : (Array.isArray(jsonResponse) ? jsonResponse : []);
    }
);

export const fetchBlogs = createAsyncThunk(
    'content/fetchBlogs',
    async (companyId: string | number = 2) => {
        const response = await fetch(`${API_URL}active/blogs/${companyId}`);
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const jsonResponse = await response.json();
        return jsonResponse.success && Array.isArray(jsonResponse.data) ? jsonResponse.data : (Array.isArray(jsonResponse) ? jsonResponse : []);
    }
);

// Fetch all data at the same time
export const fetchAllContent = createAsyncThunk(
    'content/fetchAllContent',
    async (companyId: string | number = 2, { dispatch }) => {
        await Promise.all([
            dispatch(fetchServices(companyId)),
            dispatch(fetchProjects(companyId)),
            dispatch(fetchBlogs(companyId))
        ]);
        return true;
    }
);

const initialState: any = {
    logo: localStorage.getItem('company_logo') || '', // Persist logo
    services: [],
    projects: [],
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
    blogPosts: [],
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.services = action.payload;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.projects = action.payload;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.blogPosts = action.payload;
            });
    }
});

export const { setLogo } = contentSlice.actions;

export default contentSlice.reducer;
