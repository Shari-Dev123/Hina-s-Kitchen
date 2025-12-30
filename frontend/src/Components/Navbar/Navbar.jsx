import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPage = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <img src={logoImg} alt="Hina's Kitchen" />
          <span>Hina's Kitchen</span>
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('hero')}>Home</button>
          <button onClick={() => scrollToSection('favorite')}>Favorites</button>
          <button onClick={() => scrollToSection('services')}>Deals</button>

          
          <button onClick={() => goToPage('/menu')}>Menu</button>

          <button className="cart-link" onClick={() => goToPage('/order')}>
            <FaShoppingCart />
            Cart ({totalItems})
          </button>
        </nav>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
      </div>
    </header>
  );
}

export default Navbar;
