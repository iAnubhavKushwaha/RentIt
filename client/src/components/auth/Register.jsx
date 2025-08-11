// src/components/auth/Register.jsx

import React, { useState } from 'react';
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer'); // Default role
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make API call with the role
            await api.post('/auth/register', { username, email, password, role });
            navigate('/login'); // Redirect to login page after successful registration
        } catch (error) {
            console.error('Register error:', error);
            // Handle the error; you might show an alert or set an error state
            alert('Registration failed. Please check your input and try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="mb-4 text-2xl font-bold">Register</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full p-2 mb-4 border rounded" 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-2 mb-4 border rounded" 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-2 mb-4 border rounded" 
                    required 
                />
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Role</label>
                    <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)} 
                        className="block w-full p-2 border rounded"
                    >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Register</button>
            </form>
        </div>
    );
};

export default Register;