import React from 'react';

const Header = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-blue-600">Rental Management</h1>
            <nav className="flex space-x-4">
                <ul className="flex space-x-4">
                    <li><a href="/dashboard" className="text-gray-700">Dashboard</a></li>
                    <li><a href="/rental" className="text-gray-700">Rental</a></li>
                    <li><a href="/orders" className="text-gray-700">Order</a></li>
                    <li><a href="/products" className="text-gray-700">Products</a></li>
                    <li><a href="/reporting" className="text-gray-700">Reporting</a></li>
                    <li><a href="/settings" className="text-gray-700">Settings</a></li>
                </ul>
            </nav>
            <div className="flex items-center">
                <span className="text-gray-700">Adam</span> {/* User's name */}
                {/* Add user avatar or additional user info here if needed */}
            </div>
        </div>
    );
};

export default Header;