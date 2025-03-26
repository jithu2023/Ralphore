import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/product';
import { FaArrowLeft, FaFacebook, FaInstagram, FaWhatsapp, FaGooglePay } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../components/custom.css';

function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) {
    return (
      <div className="text-center mt-32">
        <h1 className="text-2xl font-semibold text-red-500">Product not found</h1>
        <button onClick={() => navigate('/')} className="mt-4 p-2 bg-black text-white rounded-lg">Go Back to Home</button>
      </div>
    );
  }

  const sizes = product.sizes || [];
  const colors = product.colors || [];

  const handleScrollToFirstImage = () => {
    if (firstImageRef.current) {
      firstImageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSecondImage = () => {
    if (secondImageRef.current) {
      secondImageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      setSuccessMessage('Please select a size and color before adding to cart.');
      return;
    }
    const itemToAdd = { ...product, selectedSize, selectedColor };
    setCart((prevCart) => [...prevCart, itemToAdd]);
    setSuccessMessage('Product added to cart successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
    navigate('/cart');
  };

  return (
    <div className="w-full pt-20 flex flex-col min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      <div className="flex flex-col md:flex-row p-4 gap-8 mt-16">
        {/* Left Side - Thumbnail Images */}
        <div className="hidden md:flex flex-col space-y-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-24 h-30 object-cover rounded-lg cursor-pointer" 
            onClick={handleScrollToFirstImage} 
          />
          <img 
            src={product.secondImage} 
            alt={product.name} 
            className="w-24 h-30 object-cover rounded-lg cursor-pointer" 
            onClick={handleScrollToSecondImage} 
          />
        </div>

        {/* Center - Main Product Image */}
        <div className="w-full md:w-1/2 max-h-[850px] overflow-hidden rounded-lg">
          <img ref={firstImageRef} src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <img ref={secondImageRef} src={product.secondImage} alt={product.name} className="w-full h-full object-cover mt-4" />
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/3 flex flex-col space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600">${product.price}</p>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          
          {/* Size and Color Selection */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">Select Size:</label>
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
                <option value="">Choose Size</option>
                {sizes.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold">Select Color:</label>
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
                <option value="">Choose Color</option>
                {colors.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-red-500">Just 3 left in stock!</p>
          <button onClick={addToCart} className="p-4 text-black bg-white border border-black hover:bg-black hover:text-white">Add to Cart</button>
          
          {/* Payment Section */}
          <button className="p-4 flex items-center justify-center space-x-2 text-black bg-yellow-400 hover:bg-yellow-500 rounded-lg">
            <span>Pay with</span>
            <FaGooglePay className="text-black mt-1" size={34} />

          </button>
          <p className="text-gray-600 underline cursor-pointer">More Payment Options</p>

          {/* Wishlist Section */}
          <button className="p-4 text-gray-700 border border-gray-300 rounded-lg">Add to Wishlist</button>

          {/* Contact Section */}
          <p className="text-gray-600">Need Help or Advice? Call or WhatsApp +971 52 679 9878</p>
          
          {/* Social Share */}
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-blue-600 cursor-pointer" size={24} />
            <FaInstagram className="text-pink-500 cursor-pointer" size={24} />
            <FaWhatsapp className="text-green-500 cursor-pointer" size={24} />
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default ProductDetail;