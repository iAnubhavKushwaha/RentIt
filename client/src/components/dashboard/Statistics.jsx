import React from 'react';

const Statistics = () => {
    return (
        <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="p-4 bg-blue-100 rounded text-center">
                <h2 className="text-xl">Quotations</h2>
                <p className="text-2xl font-bold">10</p>
            </div>
            <div className="p-4 bg-blue-200 rounded text-center">
                <h2 className="text-xl">Rentals</h2>
                <p className="text-2xl font-bold">26</p>
            </div>
            <div className="p-4 bg-blue-300 rounded text-center">
                <h2 className="text-xl">Revenue</h2>
                <p className="text-2xl font-bold">$10,599</p>
            </div>
        </div>
    );
};

export default Statistics;