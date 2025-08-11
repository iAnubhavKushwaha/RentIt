import React from 'react';

const ProductDetails = ({ product }) => {
    if (!product) return <p className="text-center text-zinc-500">No product selected.</p>;

    return (
        <div className="bg-white shadow rounded-lg p-6 border border-zinc-200">
            <h2 className="text-xl font-bold mb-4">{product.name}</h2>
            <p className="text-zinc-600 mb-4">{product.description}</p>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="font-semibold text-zinc-800">Price</h3>
                    <p>₹{product.price}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-zinc-800">Stock</h3>
                    <p>{product.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;