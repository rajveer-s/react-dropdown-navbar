import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';
import Design from './pages/Design';
import Development from './pages/Development';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/design' element={<Design />} />
        <Route path='/development' element={<Development />} />
      </Routes>
    </Router>
  );
}

export default App;
