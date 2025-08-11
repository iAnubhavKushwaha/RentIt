import React from 'react';

const TopCustomers = () => {
    const customers = [
        { customer: 'Customer1', ordered: 10, revenue: 3032 },
        { customer: 'Customer2', ordered: 5, revenue: 1008 },
        { customer: 'Customer3', ordered: 4, revenue: 3008 },
    ];

    return (
        <div className="bg-white border border-zinc-200 rounded-xl mb-6 p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-800">Top Customers</h2>
            <table className="min-w-full table-auto border border-zinc-200 mt-4 text-sm">
                <thead className="bg-zinc-50">
                    <tr>
                        <th className="border border-zinc-200 px-4 py-2 text-left text-zinc-600 font-medium">Customer</th>
                        <th className="border border-zinc-200 px-4 py-2 text-left text-zinc-600 font-medium">Ordered</th>
                        <th className="border border-zinc-200 px-4 py-2 text-left text-zinc-600 font-medium">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((item, index) => (
                        <tr key={index} className="odd:bg-white even:bg-zinc-50 hover:bg-zinc-100 transition-colors">
                            <td className="border border-zinc-200 px-4 py-2 text-zinc-700">{item.customer}</td>
                            <td className="border border-zinc-200 px-4 py-2 text-zinc-700">{item.ordered}</td>
                            <td className="border border-zinc-200 px-4 py-2 text-zinc-700">${item.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopCustomers;