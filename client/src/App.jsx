// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Home from './pages/Home';
import Layout from './components/common/Layout'; // New Layout wrapper
import Dashboard from './components/dashboard/Dashboard';
import RentalOrderForm from './components/orders/RentalOrderForm';
import RentalOrdersList from './components/orders/RentalOrdersList';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes without header */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Private or app routes with common header */}
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/rental-order" element={<Layout><RentalOrderForm /></Layout>} />
          <Route path="/rental-orders" element={<Layout><RentalOrdersList /></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;