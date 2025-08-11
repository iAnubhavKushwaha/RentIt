import React from 'react';

const TopCustomers = () => {
    const customers = [
        { customer: 'Customer1', ordered: 10, revenue: 3032 },
        { customer: 'Customer2', ordered: 5, revenue: 1008 },
        { customer: 'Customer3', ordered: 4, revenue: 3008 },
    ];

    return (
        <div className="bg-white shadow rounded mb-6 p-4">
            <h2 className="text-2xl font-bold">Top Customers</h2>
            <table className="min-w-full table-auto border mt-4">
                <thead className="bg-blue-100">
                    <tr>
                        <th className="border px-4 py-2">Customer</th>
                        <th className="border px-4 py-2">Ordered</th>
                        <th className="border px-4 py-2">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((item, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{item.customer}</td>
                            <td className="border px-4 py-2">{item.ordered}</td>
                            <td className="border px-4 py-2">${item.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopCustomers;