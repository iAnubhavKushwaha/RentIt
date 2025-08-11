//controllers\dashboardController.js

import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

// Get Top Customers
export const getTopCustomers = async (req, res) => {
    try {
        const topCustomers = await Order.aggregate([
            {
                $group: {
                    _id: '$customerId',
                    totalOrders: { $sum: 1 },
                    totalRevenue: { $sum: '$totalAmount' }
                }
            },
            {
                $lookup: {
                    from: 'users', // Ensure this matches your User model collection name
                    localField: '_id',
                    foreignField: '_id',
                    as: 'customerInfo'
                }
            },
            {
                $unwind: '$customerInfo'
            },
            {
                $project: {
                    _id: 0,
                    customerId: '$_id',
                    customerName: '$customerInfo.username',
                    totalOrders: 1,
                    totalRevenue: 1
                }
            },
            {
                $sort: { totalRevenue: -1 }
            },
            {
                $limit: 10
            }
        ]);

        console.log('Top Customers Data:', topCustomers); // Log the output before sending the response
        res.status(200).json(topCustomers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Top Product Categories
export const getTopProductCategories = async (req, res) => {
    try {
        const topCategories = await Product.aggregate([
            {
                $group: {
                    _id: '$category', // Group by product category
                    totalOrdered: { $sum: '$ordered' }, // Assuming 'ordered' field exists
                    totalRevenue: { $sum: '$price' } // Assuming you want to sum price
                },
            },
            { $sort: { totalRevenue: -1 } }, // Sort by total revenue descending
            { $limit: 10 }, // Limit to top 10 categories
        ]);

        res.status(200).json(topCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Top Products
export const getTopProducts = async (req, res) => {
    try {
        const topProducts = await Product.aggregate([
            {
                $group: {
                    _id: "$name", // Assuming "name" is the field for product name
                    ordered: { $sum: "$ordered" }, // Sum of all orders for this product
                    revenue: { $sum: { $multiply: ["$price", "$ordered"] } }, // Total revenue calculation
                }
            },
            {
                $sort: { revenue: -1 } // Sort by revenue in descending order
            },
            {
                $limit: 10 // Limit to top 10 products
            }
        ]);
        
        res.status(200).json(topProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};