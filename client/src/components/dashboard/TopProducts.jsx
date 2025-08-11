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
        <div className="bg-white border border-zinc-200 rounded-xl mb-6 p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-800">Top Products</h2>
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
                        <tr
                            key={index}
                            className="odd:bg-white even:bg-zinc-50 hover:bg-zinc-100 transition-colors"
                        >
                            <td className="border border-zinc-200 px-4 py-2 text-zinc-700">{item.product}</td>
                            <td className="border border-zinc-200 px-4 py-2 text-zinc-700">{item.ordered}</td>
                            <td className="border border-zinc-200 px-4 py-2 text-zinc-700">${item.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopProducts;