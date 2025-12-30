import React, { useContext, useState } from 'react';
import './MenuSection.css';
import { CartContext } from '../context/CartContext';
import channaChaat from '../../assets/Chana-Chaat.png';
import dahiBhallay from '../../assets/Dahi-bhalla-07.jpg';
import samosaChaat from '../../assets/Samosa-Chaat-with-Chai.jpg';
import shawarma from '../../assets/Chicken-Shawarma.jpg';
import cheeseShawarma from '../../assets/cheeseShawarma.jpg';
import zingerRoll from '../../assets/Zinger-Shawarma-Roll.jpg';
import chowmein from '../../assets/Veg-Chowmein-500x500.webp';
import spaghetti from '../../assets/spicy-spaghetti-arrabbiata.jpg';
import pasta from '../../assets/pasta.jpg';
import macaroni from '../../assets/macaroni.jpg';
import fries from '../../assets/Plain-Fries.jpg';
import masalaFries from '../../assets/masalaFries.jpg';
import mayoFries from '../../assets/Mayo-Fries.jpg';
import zingerBurger from '../../assets/Zinger.png';
import cheeseBurger from '../../assets/cheeseBurger.jpg';
import andaBurger from '../../assets/Anda-Shami-Burger.jpg';
import DahiPhulki from "../../assets/Dahi-Phulki.jpg";
import Shawarma from "../../assets/Shawarma.jpg";
import SpringRoll from "../../assets/Spring-Roll.jpg";
import ChickenMalaiBotiRoll from "../../assets/Chicken-Malai-Boti.png";
import OliveShawarmaRoll from "../../assets/Olive-Shawarma-Roll.jpg";
import ZingerShawarmaRollWithcheese from "../../assets/Zinger-Shawarma-Roll-With-cheese.jpg";
import AlooSamosa from "../../assets/Aloo-Samosa.jpg";
import KeemaSamosa from "../../assets/Keema-Samosa.jpg";
import ChickenSamosa from "../../assets/Chicken-Samosa.jpg";
import VegSamosa from "../../assets/Veg-Samosa.jpg";
import ChickenParatha from "../../assets/Chicken-Paratha.jpg";
import ChickenParathaWC from "../../assets/Chicken-Paratha-withCheese.jpg";
import AlloParatha from "../../assets/Allo-Paratha.jpg";
import ChickenPulaoWShami from "../../assets/Chicken-Pulao-with-Shami-Kabab.jpeg";
import Chickenbiryani from "../../assets/Chicken-Biryani.jpg";
import TawaChicken from "../../assets/Tawa-Chicken.png";
import PakoraPlate from "../../assets/Pakora-Plate.jpg";
import ChickenMalaiBoti from "../../assets/Chicken-Malai-Boti.jpg";
import TikkaBotiChicken from "../../assets/Tikka-Boti-Chicken.png";
import ChickenSeekhKebab from "../../assets/Chicken-Seekh-Kebab.jpg";
import ShamiKebab from "../../assets/Shami-Kebab.jpg";
import ClubSandwichwithfries from "../../assets/Club-Sandwich-with-fries.jpg";
import TikkaSandwich from "../../assets/Tikka-Sandwich.jpg";
import EggFriedSandwich from "../../assets/Egg-Fried-Sandwich.jpg";

function MenuSection() {
  const { cartItems, addToCart, updateQty, removeFromCart } = useContext(CartContext);
  const [selectedVariants, setSelectedVariants] = useState({});

  const getQty = (name) => {
    const item = cartItems.find(i => i.name === name);
    return item ? item.qty : 0;
  };

  const handleVariantSelect = (itemName, variant) => {
    setSelectedVariants(prev => ({ ...prev, [itemName]: variant }));
  };

  const menuCategories = {
    "Snacks & Chaats": [
      { name: "Channa Chaat", price: 150, img: channaChaat },
      { name: "Dahi Bhallay", price: 200, img: dahiBhallay },
      { name: "Samosa Chaat", price: 180, img: samosaChaat },
      { name: "Dahi Phulki", price: 200, img: DahiPhulki }
    ],
    "Shawarma & Rolls": [
      { name: "Shawarma", price: 150, img: Shawarma },
      { name: "Chicken Shawarma", price: 150, img: shawarma },
      { name: "Chicken Cheese Shawarma", price: 250, img: cheeseShawarma },
      { name: "Zinger Shawarma Roll", price: 350, img: zingerRoll },
      { name: "Spring Roll", price: 150, img: SpringRoll },
      { name: "Chicken Malai Boti Roll", price: 350, img: ChickenMalaiBotiRoll },
      { name: "Olive Shawarma Roll", price: 350, img: OliveShawarmaRoll },
      { name: "Zinger Shawarma Roll With Cheese", price: 400, img: ZingerShawarmaRollWithcheese }
    ],
    "Pasta & Noodles": [
      { name: "Chicken Chowmein", price: 500, img: chowmein },
      { name: "Spaghetti", price: 300, img: spaghetti },
      { name: "Pasta", price: 350, img: pasta },
      { name: "Macaroni", price: 250, img: macaroni }
    ],
    "Fries": [
      { name: "Plain Fries", price: 100, img: fries },
      { name: "Masala Fries", price: 200, img: masalaFries },
      { name: "Mayo Fries", price: 300, img: mayoFries }
    ],
    "Burgers": [
      { name: "Zinger Burger", price: 450, img: zingerBurger },
      { name: "Zinger Burger with Cheese", price: 500, img: cheeseBurger },
      { name: "Anda Shami Burger", price: 150, img: andaBurger }
    ],
    "Samosas": [
      { name: "Aloo Samosa", price: 25, img: AlooSamosa },
      { name: "Keema Samosa", price: 30, img: KeemaSamosa },
      { name: "Chicken Samosa", price: 30, img: ChickenSamosa },
      { name: "Veg Samosa", price: 25, img: VegSamosa }
    ],
    "Parathas": [
      { name: "Chicken Paratha", price: 200, img: ChickenParatha },
      { name: "Chicken Paratha with Cheese", price: 350, img: ChickenParathaWC },
      { name: "Allo Paratha", price: 150, img: AlloParatha }
    ],
    "Rice Dishes": [
      { name: "Chicken Biryani", img: Chickenbiryani, variants: [{ label: "Single", price: 180 }, { label: "Double", price: 350 }] },
      { name: "Chicken Pulao with Shami Kabab", img: ChickenPulaoWShami, variants: [{ label: "Single", price: 300 }, { label: "Double", price: 600 }] }
    ],
    "Chicken & BBQ": [
      { name: "Tawa Chicken", img: TawaChicken, variants: [{ label: "1 Pc", price: 300 }] },
      { name: "Pakora Plate", img: PakoraPlate, variants: [{ label: "Full Plate", price: 200 }] },
      { name: "Chicken Malai Boti", img: ChickenMalaiBoti, variants: [{ label: "6 Pcs", price: 450 }] },
      { name: "Tikka Boti Chicken", img: TikkaBotiChicken, variants: [{ label: "1 Pc", price: 350 }] },
      { name: "Chicken Seekh Kebab", img: ChickenSeekhKebab, variants: [{ label: "2 Pcs", price: 200 }] },
      { name: "Shami Kebab", img: ShamiKebab, variants: [{ label: "2 Pcs", price: 150 }] }
    ],
    "Sandwiches": [
      { name: "Club Sandwich with fries", img: ClubSandwichwithfries, variants: [{ label: "4 Pces", price: 400 }] },
      { name: "Tikka Sandwich", price: 500, img: TikkaSandwich },
      { name: "Egg Fried Sandwich", price: 350, img: EggFriedSandwich }
    ]
  };

  return (
    <section className="menu" id="menu">
      <h2>Our Menu</h2>

      <div className="menu-category-nav">
        {Object.keys(menuCategories).map(category => (
          <button
            key={category}
            onClick={() =>
              document.getElementById(category.replace(/\s+/g, '-')).scrollIntoView({ behavior: 'smooth' })
            }
          >
            {category}
          </button>
        ))}
      </div>

      {Object.keys(menuCategories).map(category => (
        <div className="menu-category" key={category} id={category.replace(/\s+/g, '-')}>
          <h3>{category}</h3>
          <div className="menu-grid">
            {menuCategories[category].map(item => {
              const selectedVariant = selectedVariants[item.name] || (item.variants && item.variants[0]);
              const cartName = item.variants ? `${item.name} (${selectedVariant.label})` : item.name;
              const qty = getQty(cartName);

              return (
                <div className="menu-card" key={item.name}>
                  <img src={item.img} alt={item.name} />
                  <div className="menu-info">
                    <h4>{item.name}</h4>

                    {item.variants && item.variants.length > 1 ? (
                      <div className="variants">
                        {item.variants.map(v => (
                          <label key={v.label} className="variant-option">
                            <input
                              type="radio"
                              name={item.name}
                              checked={selectedVariant.label === v.label}
                              onChange={() => handleVariantSelect(item.name, v)}
                            />
                            {v.label} — {v.price} PKR
                          </label>
                        ))}
                      </div>
                    ) : item.variants ? (
                      <span>{item.variants[0].label} — {item.variants[0].price} PKR</span>
                    ) : (
                      <span>{item.price} PKR</span>
                    )}

                    {qty === 0 ? (
                      <button
                        className="add-cart-btn"
                        onClick={() => addToCart({ name: cartName, price: item.variants ? selectedVariant.price : item.price, qty: 1 })}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="qty-control">
                        <button onClick={() => qty === 1 ? removeFromCart(cartName) : updateQty(cartName, qty - 1)}>−</button>
                        <span>{qty}</span>
                        <button onClick={() => updateQty(cartName, qty + 1)}>+</button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      
    </section>
    
  );
}

export default MenuSection;
