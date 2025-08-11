import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Home from './pages/Home';
import Dashboard from './components/dashboard/Dashboard';
import ProductList from './components/products/ProductList';
// import ProductDetail from './components/products/ProductDetail';
import OrderHistory from './components/orders/OrderHistory';

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
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    {/* <Route path="/products" element={<ProductList />} /> */}
                    {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
                    {/* <Route path="/orders" element={<OrderHistory />} /> */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;