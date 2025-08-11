import { Router } from 'express';
import { registerUser, loginUser, forgotPassword, resetPassword, forgotUsername } from '../controllers/authController.js';

const router = Router();

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Forgot Password
router.post('/forgot-password', forgotPassword);

// Reset Password
router.post('/reset-password', resetPassword);

// Forgot Username
router.post('/forgot-username', forgotUsername);

export default router;