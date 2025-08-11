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
        <div className="bg-white shadow rounded mb-6 p-4">
            <h2 className="text-2xl font-bold">Top Products</h2>
            {products.length === 0 ? ( // Check if products array is empty
                <div className="mt-4 text-gray-600">No products found.</div>
            ) : (
                <table className="min-w-full table-auto border mt-4">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="border px-4 py-2">Product</th>
                            <th className="border px-4 py-2">Ordered</th>
                            <th className="border px-4 py-2">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{item.product}</td>
                                <td className="border px-4 py-2">{item.ordered}</td>
                                <td className="border px-4 py-2">${item.revenue.toFixed(2)}</td> {/* Ensure correct formatting */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TopProducts;