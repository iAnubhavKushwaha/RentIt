import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import dashboardRoutes from './routes/dashboardRoutes.js';
import productRoutes from './routes/productRoutes.js'; 
import orderRoutes from './routes/orderRoutes.js'; 

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Update with your frontend's correct origin
    credentials: true
}));
app.use(express.json());

app.get('/', (req,res) => {
    res.send("API is worning");
})

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})