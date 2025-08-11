//src\components\dashboard\TopCustomers.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopCustomers = () => {
    const [customers, setCustomers] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       const API_URL = 'http://localhost:5000/api/dashboard/top-customers'; // Use absolute URL

const fetchCustomers = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        setError('No token found, please log in again.');
        setLoading(false);
        return;
    }

    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Response data:', response.data);
    } catch (err) {
        setError(err.response?.data?.message || err.message);
        console.error("Error fetching top customers:", err);
    } finally {
        setLoading(false);
    }
};

        fetchCustomers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-white shadow rounded mb-6 p-4">
            <h2 className="text-2xl font-bold">Top Customers</h2>
            {customers.length === 0 ? ( // Check if customers array is empty
                <div className="mt-4 text-gray-600">No customers found.</div>
            ) : (
                <table className="min-w-full table-auto border mt-4">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="border px-4 py-2">Customer</th>
                            <th className="border px-4 py-2">Total Orders</th>
                            <th className="border px-4 py-2">Total Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.customerName}</td>
                                <td className="border px-4 py-2">{item.totalOrders}</td>
                                <td className="border px-4 py-2">${item.totalRevenue.toFixed(2)}</td>  {/* Ensure correct formatting */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TopCustomers;