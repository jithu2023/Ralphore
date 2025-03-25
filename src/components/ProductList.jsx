import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/product';
import { FaTh, FaBars } from 'react-icons/fa';
import Footer from '../components/Footer';
import '../components/custom.css'; // Import the custom CSS for hiding scrollbar

function ProductList() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="w-full pt-32 pb-8 flex flex-col min-h-screen pb-12">
      <div className="flex-grow flex">
        {/* Sidebar with Hidden Scroll */}
        <div className="w-[300px] mt-10 sticky top-[200px] self-start overflow-y-auto custom-scrollbar text-center flex-none align-self-start mx-4 pb-12 border-b border-gray-300">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-5">
            <li>Coats & Long Jackets</li>
            <li>Dresses</li>
            <li>Skirts</li>
            <li>Tops</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-4">Color</h2>
          <ul className="space-y-2">
            <li>Ash Brown</li>
            <li>Rosewood/Soft Pink</li>
            <li>Black</li>
            <li>Brown</li>
            <li>Coral</li>
            <li>Cream</li>
            <li>Dark Blue</li>
            <li>Navy</li>
            <li>Off White</li>
            <li>Sky Blue</li>
            <li>White</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 min-h-screen">
          {/* Fixed Control Box */}
          <div className="fixed top-20 left-0 w-full bg-white/70 backdrop-blur-md border border-gray-300 p-4 z-40 flex justify-between items-center">
            {/* Grid View Icons with Vertical Line */}
            <div className="flex items-center space-x-4">
              <button
                className={`text-xl p-2 rounded-lg ${
                  viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
                onClick={() => setViewMode('grid')}
              >
                <FaTh />
              </button>
              <button
                className={`text-xl p-2 rounded-lg ${
                  viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
                onClick={() => setViewMode('list')}
              >
                <FaBars />
              </button>
              <div className="h-6 w-[1px] bg-gray-300" />
            </div>

            {/* Sort By Dropdown with Vertical Line */}
            <div className="flex items-center space-x-4">
              <div className="h-6 w-[1px] bg-gray-300" />
              <select className="p-2 rounded-lg bg-white border border-gray-300 text-gray-700">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          {/* Product List */}
          <div
            className={`mt-20 ${
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'
                : 'space-y-6'
            }`}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Horizontal Line Before Footer with Padding */}
          <div className="mt-12">
            <hr className="border-t border-gray-300" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default ProductList;
