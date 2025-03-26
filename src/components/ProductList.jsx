import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/product';
import { FaThLarge, FaTh, FaGripLines, FaBars } from 'react-icons/fa';
import Footer from '../components/Footer';
import '../components/custom.css';

function ProductList() {
  const [viewMode, setViewMode] = useState('grid4'); // Default to 4-grid

  return (
    <div className="w-full pt-32 pb-8 flex flex-col min-h-screen">
      <div className="flex-grow flex">
        {/* Sidebar - Hidden on Mobile */}
        <div className="hidden md:block w-[300px] mt-10 sticky top-[200px] self-start overflow-y-auto custom-scrollbar text-center flex-none mx-4 pb-12 border-b border-gray-300">
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
        <div className="w-full md:w-3/4 min-h-screen">
          {/* Fixed Control Box */}
          <div className="fixed top-20 left-0 w-full bg-white/70 backdrop-blur-md border border-gray-300 p-4 z-40 flex justify-between items-center">
            {/* Grid View Options */}
            <div className="flex items-center space-x-4">
              {/* Mobile View: 1 Grid & 4 Grid */}
              <button
                className={`text-xl p-2 rounded-lg ${viewMode === 'grid1' ? 'bg-gray-100' : 'hover:bg-gray-50'} md:hidden`}
                onClick={() => setViewMode('grid1')}
              >
                <FaBars />
              </button>
              <button
                className={`text-xl p-2 rounded-lg ${viewMode === 'grid4' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                onClick={() => setViewMode('grid4')}
              ><FaThLarge />
              </button>

              {/* Desktop View: 4 Grid & 6 Grid */}
              <button
                className={`text-xl p-2 rounded-lg ${viewMode === 'grid6' ? 'bg-gray-100' : 'hover:bg-gray-50'} hidden md:block`}
                onClick={() => setViewMode('grid6')}
              >
                <FaTh />
                </button>
              <div className="h-6 w-[1px] bg-gray-300" />
            </div>

            {/* Sort By Dropdown */}
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

          {/* Product List with Responsive Grids */}
          <div
            className={`mt-20 ${
              viewMode === 'grid1'
                ? 'grid grid-cols-1 gap-6'
                : viewMode === 'grid4'
                ? 'grid grid-cols-2 gap-6'  // 2 items per row for grid4
                : 'grid grid-cols-3 gap-6'  // 3 items per row for grid6
            }`}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>

          {/* Horizontal Line Before Footer */}
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
