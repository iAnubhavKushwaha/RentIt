// src/components/dashboard/TopProductCategories.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopProductCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = 'http://localhost:5000/api/dashboard/top-product-categories';

        const fetchCategories = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('No token found, please log in again.');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(API_URL, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('Response data:', response.data); 
                setCategories(response.data);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
                console.error("Error fetching top categories:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-white shadow rounded mb-6 p-4">
            <h2 className="text-2xl font-bold">Top Product Categories</h2>
            {categories.length === 0 ? (
                <div className="mt-4 text-gray-600">No categories found.</div>
            ) : (
                <table className="min-w-full table-auto border mt-4">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="border px-4 py-2">Category</th>
                            <th className="border px-4 py-2">Ordered</th>
                            <th className="border px-4 py-2">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.category}</td>
                                <td className="border px-4 py-2">{item.ordered}</td>
                                <td className="border px-4 py-2">
                                    ${typeof item.revenue === 'number' ? item.revenue.toFixed(2) : '0.00'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TopProductCategories;