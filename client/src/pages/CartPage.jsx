// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    clearCart 
  } = useCart();

  const handleCheckout = () => {
    // Implement checkout logic
    alert('Checkout functionality to be implemented');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link 
          to="/rental-shop" 
          className="
            px-6 py-3 
            bg-zinc-900 text-white 
            rounded-full 
            hover:bg-zinc-800 
            transition-colors
          "
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center border-b pb-4 space-x-4"
            >
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-zinc-600">₹{item.price}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-zinc-200 px-2 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-zinc-200 px-2 rounded"
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="bg-zinc-100 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Price</span>
              <span>₹{getTotalPrice()}</span>
            </div>
          </div>
          
          <button 
            onClick={handleCheckout}
            className="
              w-full mt-6 
              px-6 py-3 
              bg-zinc-900 text-white 
              rounded-full 
              hover:bg-zinc-800 
              transition-colors
            "
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;