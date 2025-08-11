import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Home from './pages/Home';
import Layout from './components/common/Layout';
import Dashboard from './components/dashboard/Dashboard'; // Assume this is your admin dashboard
import RentalShop from './components/shop/RentalShop'; // Corrected path for rental shop
import RentalOrderForm from './components/orders/RentalOrderForm';
import RentalOrdersList from './components/orders/RentalOrdersList';
import Products from './components/products/Products';

// Protected Route Component
const ProtectedRoute = ({ children, role }) => {
    const { user, loading } = useAuth();
    if (loading) return <div>Loading...</div>;

    return user ? (user.role === role ? children : <Navigate to="/" />) : <Navigate to="/login" />;
};

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />

                    {/* Private routes */}
                    <Route path="/rental-shop" element={
                        <Layout>
                            <ProtectedRoute role="customer">
                                <RentalShop />
                            </ProtectedRoute>
                        </Layout>} 
                    />
                    <Route path="/dashboard" element={
                        <Layout>
                            <ProtectedRoute role="admin">
                                <Dashboard />
                            </ProtectedRoute>
                        </Layout>} 
                    />
                    <Route path="/rental-order" element={
                        <Layout>
                            <ProtectedRoute role="customer">
                                <RentalOrderForm />
                            </ProtectedRoute>
                        </Layout>} 
                    />
                    <Route path="/rental-orders" element={
                        <Layout>
                            <ProtectedRoute role="customer">
                                <RentalOrdersList />
                            </ProtectedRoute>
                        </Layout>} 
                    />
                    <Route path="/products" element={
                        <Layout>
                            <ProtectedRoute role="admin">
                                <Products />
                            </ProtectedRoute>
                        </Layout>} 
                    />
                    {/* Uncomment if ProductDetails component is available */}
                    {/* <Route path="/products/:id" element={<Layout><ProductDetails /></Layout>} /> */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;