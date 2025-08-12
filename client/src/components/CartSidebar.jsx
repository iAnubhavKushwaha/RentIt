// src/components/CartSidebar.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    isCartOpen, 
    setIsCartOpen,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    alert('Checkout functionality to be implemented');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl z-50 transform transition-transform">
      <div className="p-6 bg-zinc-900 text-white flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button 
          onClick={() => setIsCartOpen(false)}
          className="text-white hover:text-zinc-300"
        >
          Close
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full p-6">
          <p className="text-zinc-600">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-250px)]">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center border-b pb-4 space-x-4"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded"
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

          <div className="p-6 bg-zinc-100">
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold">₹{getTotalPrice()}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-zinc-900 text-white py-3 rounded-lg hover:bg-zinc-800"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;