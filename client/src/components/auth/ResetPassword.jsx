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
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="mb-4 text-2xl font-bold">Reset Password</h2>
                <input 
                    type="password" 
                    placeholder="New Password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="block w-full p-2 mb-4 border rounded" 
                    required 
                />
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;