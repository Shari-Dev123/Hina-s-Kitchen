import React, { useEffect, useRef } from 'react';
import './Hero.css';
import Logo from "../../assets/logo.png"

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('show');
        } else {
          section.classList.remove('show');
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-badge">Hina's Kitchen</span>
          <h1>Delicious Food Delivered<br />Straight To Your Door</h1>
          <p>
            Fresh ingredients, authentic taste, and the warmth of home — premium quality food ready to enjoy at your doorstep.
          </p>
          <div className="hero-actions">
             <a href="/menu" className="btn primary">Explore Menu</a>
             <a href="#services" className="btn secondary">Explore Our Deals</a>
          </div>
        </div>

        <div className="hero-right">
          <img src={Logo} alt="Hina's Kitchen Logo" className="hero-dish"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
