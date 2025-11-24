import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/shop" element={<div className="main-content"><ProductList /></div>} />
            <Route path="/cart" element={<div className="main-content"><Cart /></div>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

