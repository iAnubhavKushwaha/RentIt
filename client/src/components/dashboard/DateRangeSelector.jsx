import React from 'react';

const DateRangeSelector = () => {
    return (
        <select className="mb-4 p-2 border rounded">
            <option value="last-30-days">Last 30 days</option>
            <option value="last-7-days">Last 7 days</option>
            <option value="today">Today</option>
            {/* Add more options as needed */}
        </select>
    );
};

export default DateRangeSelector;