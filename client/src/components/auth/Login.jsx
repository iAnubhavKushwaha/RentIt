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
        <div className="flex items-center justify-center min-h-screen bg-zinc-100">
            <div className="bg-white p-10 rounded-xl shadow-lg w-[28rem]">
                <h2 className="text-xl font-bold text-zinc-800 mb-4 text-center">RentIt</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-zinc-700 mb-2 text-sm">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full p-2 py-2.5 text-sm border border-zinc-300 rounded focus:ring-2 focus:ring-zinc-400 focus:border-zinc-400" 
                            required 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-zinc-700 mb-2 text-sm">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full p-2 py-2.5 text-sm border border-zinc-300 rounded focus:ring-2 focus:ring-zinc-400 focus:border-zinc-400" 
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full py-2.5 bg-zinc-700 hover:bg-zinc-800 text-white rounded text-sm transition-colors duration-300">
                        SIGN IN
                    </button>
                </form>
                <div className="text-center mt-3 text-sm">
                    <p className="text-zinc-700 mb-1">Don’t have an account? 
                        <a href="/register" className="text-blue-700 hover:text-blue-900"> Register here</a>
                    </p>
                    <p className="text-zinc-700">Forgot your password?
                        <a href="/forgot-password" className="text-blue-700 hover:text-blue-900"> change password</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
