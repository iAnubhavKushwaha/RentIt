//routes\orderRoutes.js

import { Router } from 'express';
import {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
} from '../controllers/orderController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

// Protect order routes with authentication middleware
router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getAllOrders);
router.get('/:id', authMiddleware, getOrderById);
router.put('/:id', authMiddleware, updateOrder);
router.delete('/:id', authMiddleware, deleteOrder);

export default router;