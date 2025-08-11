import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            console.log('Login Response:', response.data); // Check response on login
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const logout = () => {
        console.log("Logging out..."); // Debug
        setUser(null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Token found:', token); // Check if token exists

        if (token) {
            api.get('/auth/me') 
                .then((response) => {
                    console.log('Fetched User Data:', response.data); // User data
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
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for easier access to the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};