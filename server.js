import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send("API is worning");
})

app.listen(PORT, () => {
    console.log(`Server is running on port 3000 ${PORT}`);
})