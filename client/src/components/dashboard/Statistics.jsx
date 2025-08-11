import React from 'react';
const Statistics = () => {
    return (
        <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="p-4 bg-white border border-zinc-200 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-sm font-medium text-zinc-500">Quotations</h2>
                <p className="text-2xl font-semibold text-zinc-800 mt-1">10</p>
            </div>
            <div className="p-4 bg-white border border-zinc-200 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-sm font-medium text-zinc-500">Rentals</h2>
                <p className="text-2xl font-semibold text-zinc-800 mt-1">26</p>
            </div>
            <div className="p-4 bg-white border border-zinc-200 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-sm font-medium text-zinc-500">Revenue</h2>
                <p className="text-2xl font-semibold text-zinc-800 mt-1">$10,599</p>
            </div>
        </div>
    );
};

export default Statistics;