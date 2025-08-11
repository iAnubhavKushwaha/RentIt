//src\components\auth\ResetPassword.jsx
import React, { useState } from 'react';
import api from '../../utils/api';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/forgot-password', { email });
            alert('Password reset link sent to your email');
        } catch (error) {
            console.error('Error sending password reset link:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-100">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-10 rounded-xl shadow-lg w-[28rem]"
            >
                <h2 className="mb-4 text-xl font-bold text-zinc-800">Forgot Password</h2>
                
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-2 py-2.5 mb-4 text-sm border border-zinc-300 focus:ring-2 focus:ring-zinc-400 focus:border-zinc-400 rounded-lg" 
                    required 
                />
                
                <button 
                    type="submit" 
                    className="w-full py-2.5 px-2 bg-zinc-700 hover:bg-zinc-800 text-white text-sm rounded-lg transition-colors duration-300"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;