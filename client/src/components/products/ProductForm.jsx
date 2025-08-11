import React, { useState } from 'react';
import api from '../../utils/api';

const ProductForm = ({ onClose, onSave, product }) => {
    const [name, setName] = useState(product?.name || '');
    const [description, setDescription] = useState(product?.description || '');
    const [price, setPrice] = useState(product?.price || '');
    const [stock, setStock] = useState(product?.stock || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (product) {
                await api.put(`/products/${product.id}`, { name, description, price, stock });
            } else {
                await api.post('/products', { name, description, price, stock });
            }
            onSave();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto border border-zinc-200">
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
                    type="number"
                    placeholder="Stock Quantity"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <div className="flex space-x-4">
                    <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                        Save
                    </button>
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-zinc-300 rounded hover:bg-zinc-400 transition">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;