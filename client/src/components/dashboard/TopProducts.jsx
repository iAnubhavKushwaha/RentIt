// src/components/dashboard/TopProducts.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopProducts = () => {
    const [products, setProducts] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = 'http://localhost:5000/api/dashboard/top-products'; // Use absolute URL

        const fetchProducts = async () => {
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
                setProducts(response.data); // Set products state from the response
            } catch (err) {
                setError(err.response?.data?.message || err.message);
                console.error("Error fetching top products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-white border border-zinc-200 rounded-xl mb-6 p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-800">Top Products</h2>
            {products.length === 0 ? ( // Check if products array is empty
                <div className="mt-4 text-gray-600">No products found.</div>
            ) : (
                <table className="min-w-full table-auto border border-zinc-200 mt-4 text-sm">
                    <thead className="bg-zinc-50">
                        <tr>
                            <th className="border border-zinc-200 px-4 py-2 text-left text-zinc-600 font-medium">Product</th>
                            <th className="border border-zinc-200 px-4 py-2 text-left text-zinc-600 font-medium">Ordered</th>
                            <th className="border border-zinc-200 px-4 py-2 text-left text-zinc-600 font-medium">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-zinc-50 hover:bg-zinc-100 transition-colors">
                                <td className="border border-zinc-200 px-4 py-2 text-zinc-700">{item.product}</td>
                                <td className="border border-zinc-200 px-4 py-2 text-zinc-700">{item.ordered}</td>
                                <td className="border border-zinc-200 px-4 py-2 text-zinc-700">${item.revenue.toFixed(2)}</td> {/* Ensure correct formatting */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TopProducts;