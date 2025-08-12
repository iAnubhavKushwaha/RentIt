// src/components/products/ProductForm.jsx

import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

const ProductForm = ({ onClose, onSave, product }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [rentable, setRentable] = useState(true);
    const [unit, setUnit] = useState('day'); // Default unit can be set
    const [availability, setAvailability] = useState(true);

    // Set state if editing an existing product
    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setRentable(product.rentable);
            setUnit(product.unit);
            setAvailability(product.availability);
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construct product data object
        const productData = {
            name,
            description,
            price,
            rentable,
            unit,
            availability,
        };

        const token = localStorage.getItem('token'); // Change to wherever you store your token

        try {
            if (product) {
                // If editing an existing product
                await api.put(`/products/${product.id}`, productData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                // If creating a new product
                await api.post('/products', productData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
            onSave(); // Call the parent's save function
            onClose(); // Optionally close the modal/form
        } catch (error) {
            console.error('Error saving product:', error.response?.data || error.message);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto border border-gray-200">
            <h2 className="text-xl font-bold mb-4">{product ? 'Edit Product' : 'Create Product'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border p-2 rounded"
                    rows="3"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Unit (e.g., hour, day, week)"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={rentable}
                            onChange={(e) => setRentable(e.target.checked)}
                            className="mr-2"
                        />
                        Rentable
                    </label>
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={availability}
                            onChange={(e) => setAvailability(e.target.checked)}
                            className="mr-2"
                        />
                        Available
                    </label>
                </div>
                <div className="flex space-x-4">
                    <button 
                        type="submit" 
                        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                    >
                        Save
                    </button>
                    <button 
                        type="button" 
                        onClick={onClose} 
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;