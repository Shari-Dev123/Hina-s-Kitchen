import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home">

      <div className="hero">
        <div className="hero-content">
          <h1>Hina's Kitchen</h1>
          <p className="tagline">Savor the Flavor, Share the Love 🍴</p>
          <a href="/order" className="cta-button">
            Order Now
          </a>
        </div>
        <div className="hero-image">
          <img src="/images/hero-food.jpg" alt="Delicious Food" />
        </div>
      </div>

      <div className="popular-items">
        <h2>Popular Dishes</h2>
        <div className="cards">
          <div className="card">
            <img src="/images/zinger-burger.jpg" alt="Zinger Burger" />
            <div className="card-content">
              <h3>Zinger Burger</h3>
              <p>Juicy Zinger with melted cheese and crispy veggies</p>
              <span className="price">PKR 350</span>
            </div>
          </div>

          <div className="card">
            <img src="/images/chicken-biryani.jpg" alt="Chicken Biryani" />
            <div className="card-content">
              <h3>Chicken Biryani</h3>
              <p>Spicy and aromatic biryani with tender chicken pieces</p>
              <span className="price">PKR 500</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
