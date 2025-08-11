import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        navigate('/dashboard');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Rental Management</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded" 
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
                        SIGN IN
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">don’t have an account? 
                        <a href="/register" className="text-blue-600 hover:underline"> Register here</a>
                    </p>
                    <p className="text-gray-600">
                        <a href="/forgot-password" className="text-blue-600 hover:underline">forgot username / password</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;