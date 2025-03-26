import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from '../src/components/ProductList';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import ProductDetail from '../src/components/ProductDetail';
import ProductCart from '../src/components/ProductCart';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<ProductCart cart={cart} />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
        <Route path="/my-bag" element={<h1>My Bag Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
