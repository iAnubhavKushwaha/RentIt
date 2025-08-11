import React from 'react';
import Header from '../common/Header'; // Use the common Header component
import SearchBar from './SearchBar';
import DateRangeSelector from './DateRangeSelector';
import Statistics from './Statistics';
import TopProductCategories from './TopProductCategories';
import TopProducts from './TopProducts';
import TopCustomers from './TopCustomers';

const Dashboard = () => {
    return (
        <div className="container mx-auto p-6">
            <Header />  {/* Include the common header */}
            <SearchBar />
            <DateRangeSelector />
            <Statistics />
            <TopProductCategories />
            <TopProducts />
            <TopCustomers />
        </div>
    );
};

export default Dashboard;