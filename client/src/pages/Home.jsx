import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 text-center animate-fadeInUp">
            <h1 className="text-6xl font-bold mb-4">Welcome to RentIt</h1>
            <p className="text-lg text-zinc-600 mb-6">Your one-stop solution for seamless rentals — hassle-free, reliable, and fast.</p>
            <div className="flex space-x-4">
                <Link to="/login" className="px-6 py-2 bg-zinc-700 hover:bg-zinc-800 text-white rounded-full transition-colors duration-300 text-sm">Login</Link>
                <Link to="/register" className="px-6 py-2 bg-zinc-700 hover:bg-zinc-800 text-white rounded-full transition-colors duration-300 text-sm">Register</Link>
            </div>
        </div>
    );
};

export default Home