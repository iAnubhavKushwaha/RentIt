//src\components\auth\ResetPassword.jsx
import React, { useState } from 'react';
import api from '../../utils/api';
import { useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const [newPassword, setNewPassword] = useState('');
    const token = searchParams.get('token'); // Capture the token from the URL

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/reset-password', { token, newPassword });
            alert('Password has been reset successfully.');
        } catch (error) {
            console.error('Error resetting password:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-100">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg w-[28rem]">
                <h2 className="mb-4 text-xl font-bold text-zinc-800">Reset Password</h2>
                <input 
                    type="password" 
                    placeholder="New Password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="border-zinc-300 focus:ring-2 focus:ring-zinc-400 focus:border-zinc-400 text-sm py-2.5 rounded-lg mb-4 w-full" 
                    required 
                />
                <button type="submit" className="bg-zinc-700 hover:bg-zinc-800 text-sm py-2.5 transition-colors duration-300 text-white rounded-lg w-full">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;