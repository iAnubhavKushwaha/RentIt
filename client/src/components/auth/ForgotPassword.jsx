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
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="mb-4 text-2xl font-bold">Forgot Password</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-2 mb-4 border rounded" 
                    required 
                />
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPassword;