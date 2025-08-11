import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

// Set up interceptors to include JWT token in headers if the user is authenticated
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;