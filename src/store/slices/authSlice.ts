
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
}

const initialState: AuthState = {
    isAuthenticated: localStorage.getItem('auth_token') ? true : false, // Simple token check
    user: localStorage.getItem('auth_user') || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string }>) => {
            state.isAuthenticated = true;
            state.user = action.payload.username;
            localStorage.setItem('auth_token', 'mock-token-123'); // Simulate persistent token
            localStorage.setItem('auth_user', action.payload.username);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_user');
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
