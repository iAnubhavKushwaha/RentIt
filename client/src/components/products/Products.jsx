// src/components/products/Products.jsx
import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import api from '../../utils/api';

const Products = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [products, setProducts] = useState([]); // Initialize products as an empty array

    const fetchProducts = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSave = () => {
        setIsFormOpen(false);
        fetchProducts();
    };

    return (
        <div className="min-h-screen bg-zinc-50 font-sans">
            <div className="container mx-auto px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={() => setIsFormOpen(true)} 
                        className="px-4 py-2 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 text-sm hover:bg-zinc-200 transition-colors"
                    >
                        Create
                    </button>
                    <button className="px-4 py-2 rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 text-sm hover:bg-zinc-200 transition-colors">
                        Update Stock
                    </button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-zinc-600">
                    <span>1 / 80</span>
                    <button className="px-2 py-1 rounded border border-zinc-300 bg-zinc-100 hover:bg-zinc-200 transition-colors" aria-label="Previous Page">&lt;</button>
                    <button className="px-2 py-1 rounded border border-zinc-300 bg-zinc-100 hover:bg-zinc-200 transition-colors" aria-label="Next Page">&gt;</button>
                </div>
            </div>

            <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-sm rounded-2xl p-6 border border-zinc-200">
                    <h2 className="text-lg font-semibold mb-4 text-zinc-900">General Product Info</h2>
                    <p className="text-zinc-600 text-sm">Add your general product details here...</p>
                    {isFormOpen && (
                        <ProductForm onClose={() => setIsFormOpen(false)} onSave={handleSave} />
                    )}
                </div>

                <div className="bg-white shadow-sm rounded-2xl p-6 border border-zinc-200">
                    <h2 className="text-lg font-semibold mb-4 text-zinc-900">Available Products</h2>
                    {/* Pass products state to ProductList */}
                    <ProductList products={products} /> 
                </div>
            </div>
        </div>
    );
};

export default Products;