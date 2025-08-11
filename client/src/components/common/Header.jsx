import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate(); 

    if (loading) {
        return <div>Loading...</div>; 
    }

    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-sm border-b border-zinc-200">
            <h1 className="text-2xl font-bold text-zinc-800">RentIt</h1>
            <nav className="flex">
                <ul className="flex space-x-5">
                    <li>
                        <Link
                            to="/dashboard"
                            className="px-4 py-2 rounded-full text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/rental-order"
                            className="px-4 py-2 rounded-full text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        >
                            Rental
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/orders"
                            className="px-4 py-2 rounded-full text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        >
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            className="px-4 py-2 rounded-full text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/reporting"
                            className="px-4 py-2 rounded-full text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        >
                            Reporting
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/settings"
                            className="px-4 py-2 rounded-full text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        >
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center">
                <span className="text-zinc-700">{user ? user.name : 'Guest'}</span>
                {user && (
                    <button 
                      className="ml-4 text-zinc-700 hover:text-zinc-900" 
                      onClick={handleLogout} 
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;