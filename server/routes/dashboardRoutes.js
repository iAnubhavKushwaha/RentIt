//routes\dashboardRoutes.js
import { Router } from 'express';
import {
    getTopCustomers,
    getTopProductCategories,
    getTopProducts,
} from '../controllers/dashboardController.js';

import authMiddleware from '../middlewares/authMiddleware.js';
const router = Router();

// Protect the routes with authentication middleware if required
router.get('/top-customers', authMiddleware, getTopCustomers);
router.get('/top-product-categories', authMiddleware, getTopProductCategories);
router.get('/top-products', authMiddleware, getTopProducts);

export default router;