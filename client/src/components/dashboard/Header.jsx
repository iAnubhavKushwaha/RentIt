import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate(); // Initialize the navigate function

    if (loading) {
        return <div>Loading...</div>; 
    }

    const handleLogout = () => {
        logout(); // Call the logout function
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-blue-600">Rental Management</h1>
            <nav className="flex space-x-4">
                <ul className="flex space-x-4">
                    <li><Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link></li>
                    <li><Link to="/rental" className="text-gray-700 hover:text-blue-600">Rental</Link></li>
                    <li><Link to="/orders" className="text-gray-700 hover:text-blue-600">Orders</Link></li>
                    <li><Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link></li>
                    <li><Link to="/reporting" className="text-gray-700 hover:text-blue-600">Reporting</Link></li>
                    <li><Link to="/settings" className="text-gray-700 hover:text-blue-600">Settings</Link></li>
                </ul>
            </nav>
            <div className="flex items-center">
                <span className="text-gray-700">{user ? user.name : 'Guest'}</span>
                {user && (
                    <button 
                      className="ml-4 text-gray-700 hover:text-blue-600" 
                      onClick={handleLogout} // Update to call handleLogout
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;