import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rentable: { type: Boolean, default: true },
    unit: { type: String, enum: ['hour', 'day', 'week'], required: true },
    availability: { type: Boolean, default: true },
});

export default mongoose.model('Product', ProductSchema);