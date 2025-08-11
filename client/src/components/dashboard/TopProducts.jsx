import React from 'react';

const TopProducts = () => {
    const products = [
        { product: 'Wheelchairs', ordered: 10, revenue: 3032 },
        { product: 'Tables', ordered: 5, revenue: 1008 },
        { product: 'Chairs', ordered: 4, revenue: 3008 },
        { product: 'Laptops', ordered: 3, revenue: 2000 },
        { product: 'Projectors', ordered: 2, revenue: 1500 },
        { product: 'Printers', ordered: 1, revenue: 500 },
        { product: 'Rental - Service', ordered: 25, revenue: 2940 },
    ];

    return (
        <div className="bg-white shadow rounded mb-6 p-4">
            <h2 className="text-2xl font-bold">Top Products</h2>
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
                            <td className="border px-4 py-2">${item.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopProducts;