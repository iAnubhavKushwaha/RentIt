//middlewares\authMiddleware.js
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(" ")[1];
    console.log('Incoming Token:', token); // Log incoming token

    if (!token) {
        console.log('Access denied: No token provided');
        return res.status(401).json({ message: 'Access denied.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Verified User:', verified); // Log verified user info
        req.user = verified;
        next();
    } catch (err) {
        console.error('Token verification failed:', err.message); // Log error details
        return res.status(400).json({ message: 'Invalid token.' });
    }
};
export default authMiddleware;