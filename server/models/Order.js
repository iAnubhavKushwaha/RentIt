import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    status: { type: String, enum: ['quote', 'confirmed', 'completed'], default: 'quote' },
    totalAmount: { type: Number, required: true },
    rentalDuration: { type: Number, required: true }, // Duration in days
    orderDate: { type: Date, default: Date.now },
    pickupTime: { type: Date, required: true },
    returnTime: { type: Date, required: true },
});

export default mongoose.model('Order', OrderSchema);