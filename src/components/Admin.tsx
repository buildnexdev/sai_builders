import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogo } from '../store/slices/contentSlice';
import type { RootState } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { Upload, LogOut, Home } from 'lucide-react';

const Admin = () => {
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
    const { logo } = useSelector((state: RootState) => state.content) as { logo: string };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [preview, setPreview] = useState<string | null>(logo || null);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setPreview(base64String);
                dispatch(setLogo(base64String));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    if (!isAuthenticated) return null;

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600">Welcome, {user}</span>
                            <Link to="/" className="text-gray-600 hover:text-gray-900">
                                <Home className="w-6 h-6" />
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-red-600 hover:text-red-800"
                            >
                                <LogOut className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Company Logo Settings
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                                <p>Upload a new company logo to be displayed on the website header.</p>
                            </div>
                            <div className="mt-5">
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            {preview ? (
                                                <img src={preview} alt="Logo Preview" className="max-h-48 object-contain mb-4" />
                                            ) : (
                                                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                                            )}
                                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Admin;
