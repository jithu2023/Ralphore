import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-lg font-bold">${product.price}</p>
        <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded">Add to Bag</button>
      </div>
    </div>
  );
}

export default ProductCard;