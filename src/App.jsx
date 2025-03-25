import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from '../src/components/ProductList';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/my-bag" element={<h1>My Bag Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;