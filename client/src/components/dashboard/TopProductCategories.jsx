import React from 'react';

const TopProductCategories = () => {
    const categories = [
        { category: 'Electronics', ordered: 120, revenue: 15000 },
        { category: 'Furniture', ordered: 80, revenue: 12000 },
        { category: 'Clothing', ordered: 200, revenue: 8000 },
        { category: 'Books', ordered: 150, revenue: 5000 },
        { category: 'Sports', ordered: 90, revenue: 7000 },
        { category: 'Toys', ordered: 60, revenue: 4000 },
        { category: 'Rental - Service', ordered: 25, revenue: 2940 },
    ];

    return (
        <div className="bg-white border border-zinc-200 rounded-xl mb-6 p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-800">Top Product Categories</h2>
            <table className="min-w-full table-auto border border-zinc-200 mt-4 text-sm">
                <thead className="bg-zinc-50">
                    <tr>
                        <th className="border border-zinc-200 px-4 py-2 text-left text-zinc-600 font-medium">Category</th>
                        <th className="border border-zinc-200 px-4 py-2 text-left text-zinc-600 font-medium">Ordered</th>
                        <th className="border border-zinc-200 px-4 py-2 text-left text-zinc-600 font-medium">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item, index) => (
                        <tr key={index} className="odd:bg-white even:bg-zinc-50 hover:bg-zinc-100 transition-colors">
                            <td className="border border-zinc-200 px-4 py-2 text-zinc-700">{item.category}</td>
                            <td className="border border-zinc-200 px-4 py-2 text-zinc-700">{item.ordered}</td>
                            <td className="border border-zinc-200 px-4 py-2 text-zinc-700">${item.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopProductCategories;