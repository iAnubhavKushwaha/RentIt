import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            console.log('Login Response:', response.data); // Check the response

            setUser(response.data.user); // Ensure this holds the correct user info
            localStorage.setItem('token', response.data.token);

            return response.data.user; // Ensure this includes the role
        } catch (error) {
            console.error('Login error:', error);
            return null; // Return null if there's an error
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.get('/auth/me') 
                .then((response) => {
                    setUser(response.data);
                })
                .catch(() => {
                    logout();
                });
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// Custom hook for easier access to context
export const useAuth = () => {
    return useContext(AuthContext);
};