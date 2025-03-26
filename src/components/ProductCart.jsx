import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

function ProductCart({ cart = [], setCart }) {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setSuccessMessage('Product removed from cart successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="w-full pt-20 flex flex-col min-h-screen bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      <div className="p-6 mt-16">
        <h1 className="text-4xl font-bold mb-8">My Cart</h1>
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty. Start shopping!</p>
        ) : (
          <div className="space-y-8">
            {cart.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-4">
                  <img src={product.image} alt={product.name} className="w-28 h-28 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700">
                  <FaTrashAlt size={20} />
                </button>
              </div>
            ))}

            {/* Cart Summary Section */}
            <div className="p-6 bg-white rounded-xl shadow-md mt-8">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="flex justify-between mt-4 text-xl font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 p-4 bg-black text-white rounded-lg hover:bg-gray-800">Proceed to Checkout</button>
            </div>
            <button onClick={() => navigate('/')} className="mt-8 p-4 bg-gray-800 text-white rounded-lg">Continue Shopping</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCart;
