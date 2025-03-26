import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle the click to navigate to the product detail page
  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleProductClick} // Add onClick for navigation
      style={{ cursor: 'pointer' }} // Optional: To indicate it's clickable
    >
      {/* Image Container for Smooth Transition */}
      <div className="w-full h-170 relative">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover absolute transition-opacity duration-200 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Second Image for Hover */}
        <img
          src={product.secondImage}
          alt={product.name}
          className={`w-full h-full object-cover absolute transition-opacity duration-00 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Product Details (No Transition Applied) */}
      <div className="p-4 text-center">
        <h2 className="text-2xl font-serif text-gray-800">{product.name}</h2>
        <p className="text-xl font-mono text-gray-600 mt-2">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
