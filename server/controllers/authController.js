import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendEmail } from '../utils/notificationUtils.js';
import crypto from 'crypto';

// Register User
export const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body; // Accept the role from the request body

    // Validate role
    if (!['customer', 'admin'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role. Must be "customer" or "admin".' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, role }); // Include role in user creation

    try {
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered', user: savedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, username: user.username, email: user.email, role: user.role } }); // Include role in response
};

// Forgot Password
export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    // Generate password reset token
    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    const resetLink = `http://localhost:5000/reset-password/${token}`; // Change URL to your frontend reset link

    // Send email with the reset link
    await sendEmail(user.email, 'Password Reset', `Click here to reset your password: ${resetLink}`);
    res.status(200).json({ message: 'Password reset link sent to your email' });
};

// Reset Password
export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });

    if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

    // Update the password
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined; // Remove reset token
    user.resetPasswordExpires = undefined; // Remove expiration

    await user.save();

    res.status(200).json({ message: 'Password has been reset' });
};

// Forgot Username
export const forgotUsername = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    const usernameMessage = `Your username is: ${user.username}`;

    // Send email with the username
    await sendEmail(user.email, 'Username Retrieval', usernameMessage);
    res.status(200).json({ message: 'Username sent to your email' });
};