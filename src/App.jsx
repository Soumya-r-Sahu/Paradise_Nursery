import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

