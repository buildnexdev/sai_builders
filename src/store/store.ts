import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        content: contentReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
