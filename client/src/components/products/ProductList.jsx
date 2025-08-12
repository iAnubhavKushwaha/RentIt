// src/components/products/ProductList.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    // Ensure products is always defined and is an array
    if (!products || !Array.isArray(products)) {
        return <p className="text-center text-zinc-500">No products available.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
                <div key={product._id} className="border rounded p-4 shadow hover:bg-gray-100">
                    <Link to={`/products/${product._id}`}>
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="font-bold">₹{product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;