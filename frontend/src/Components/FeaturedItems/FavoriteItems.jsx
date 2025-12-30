import React, { useContext } from 'react';
import './FavoriteItems.css';
import { CartContext } from '../context/CartContext.jsx';

import biryani from '../../assets/Chicken-Biryani.jpg';
import andaBurger from '../../assets/Anda-Shami-Burger.jpg';
import zingerBurger from '../../assets/Zinger.webp';

function FavoriteItems() {
  const { cartItems, addToCart, updateQty, removeFromCart } = useContext(CartContext);

  const favorites = [
    { id: 1, name: "Chicken Biryani", price: 180, img: biryani },
    { id: 2, name: "Anda Shami Burger", price: 150, img: andaBurger },
    { id: 3, name: "Zinger Burger", price: 450, img: zingerBurger }
  ];

  const getQty = (name) => {
    const item = cartItems.find(i => i.name === name);
    return item ? item.qty : 0;
  };

  return (
    <section className="favorite" id="favorite">
      <h2>Customer Favorites</h2>

      <div className="favorite-grid">
        {favorites.map(item => {
          const qty = getQty(item.name);

          return (
            <div className="favorite-card" key={item.id}>
              <img src={item.img} alt={item.name} />

              <div className="favorite-info">
                <h3>{item.name}</h3>
                <span>{item.price.toLocaleString()} PKR</span>

                {qty === 0 ? (
                  <button
                    className="add-favorite-btn"
                    onClick={() =>
                      addToCart({ name: item.name, price: item.price, qty: 1 })
                    }
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="qty-control">
                    <button
                      onClick={() =>
                        qty === 1
                          ? removeFromCart(item.name)
                          : updateQty(item.name, qty - 1)
                      }
                    >
                      −
                    </button>

                    <span>{qty}</span>

                    <button
                      onClick={() => updateQty(item.name, qty + 1)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FavoriteItems;
