import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './Components/context/CartContext.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import FavoriteItems from './Components/FeaturedItems/FavoriteItems.jsx';
import Services from './Components/Deals/Deals.jsx';
import Reviews from './Components/TestimonialsSection/TestimonialsSection.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MenuSection from './Components/Menu/MenuSection.jsx';
import Cart from './Components/Cart/Cart.jsx';

function App() {
  return (
    <div className="app">
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <FavoriteItems />
              <Services />
              <Reviews />
              <Footer />
            </>
          } />
          <Route path="/menu" element={<MenuSection />} />
          <Route path="/order" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
    </div>
  );
}

export default App;
