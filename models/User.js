import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
});

export default mongoose.model('User', UserSchema);