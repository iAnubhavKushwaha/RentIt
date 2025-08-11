import React from 'react';

const TopProductCategories = () => {
    const categories = [
        //dummy data
        { category: 'Electronics', ordered: 120, revenue: 15000 },
        { category: 'Furniture', ordered: 80, revenue: 12000 },
        { category: 'Clothing', ordered: 200, revenue: 8000 },
        { category: 'Books', ordered: 150, revenue: 5000 },
        { category: 'Sports', ordered: 90, revenue: 7000 },
        { category: 'Toys', ordered: 60, revenue: 4000 },
        { category: 'Rental - Service', ordered: 25, revenue: 2940 },

    ];

    return (
        <div className="bg-white shadow rounded mb-6 p-4">
            <h2 className="text-2xl font-bold">Top Product Categories</h2>
            <table className="min-w-full table-auto border mt-4">
                <thead className="bg-blue-100">
                    <tr>
                        <th className="border px-4 py-2">Category</th>
                        <th className="border px-4 py-2">Ordered</th>
                        <th className="border px-4 py-2">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{item.category}</td>
                            <td className="border px-4 py-2">{item.ordered}</td>
                            <td className="border px-4 py-2">${item.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopProductCategories;