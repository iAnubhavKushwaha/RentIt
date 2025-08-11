import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-5xl font-bold mb-6">Welcome to Our Rental Service</h1>
            <p className="mb-4">Find the best products and services that fit your needs.</p>
            <div className="flex space-x-4">
                <Link to="/login" className="p-2 bg-blue-600 text-white rounded">Login</Link>
                <Link to="/register" className="p-2 bg-green-600 text-white rounded">Register</Link>
            </div>
        </div>
    );
};

export default Home