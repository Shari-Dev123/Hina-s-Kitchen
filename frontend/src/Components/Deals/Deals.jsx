import React from 'react';
import { useContext } from 'react';
import './Deals.css';
import { CartContext } from '../context/CartContext.jsx';

function ServicesSection() {

    let { addToCart } = useContext(CartContext);

    let services = [
        {
            title: "Mini Food Deal (3–4 Persons)",
            description:
                "Aloo Samosa (6), Chicken Samosa (6), Plain Fries (Large), Spring Roll (4), Chicken Biryani (1 kg)",
            oldPrice: "2,700 PKR",
            dealPrice: 2300
        },
        {
            title: "Small Family Deal (5–6 Persons)",
            description:
                "Aloo Samosa (10), Chicken Samosa (10), Spring Roll (8), Masala Fries (2 Large), Chicken Biryani (2 kg), Shawarma (4), Soft Drinks (1.5L x2)",
            oldPrice: "6,000 PKR",
            dealPrice: 5300
        },
        {
            title: "Birthday Party Food Deal (12–15 Persons)",
            description:
                "Cake (3 Pound), Samosa (40), Spring Roll (15), Masala Fries (3 Large), Biryani (4 kg), Zinger Burger (6), Club Sandwich (8 pcs)",
            oldPrice: "16,000 PKR",
            dealPrice: 14500
        },
        {
            title: "Family & Friends Gathering Deal (18–22 Persons)",
            description:
                "Samosa (60), Spring Roll (25), Malai Boti (24), Seekh Kebab (20), Masala Fries (4 Large), Biryani (6 kg), Pulao (4 kg), Soft Drinks (1.5L x5)",
            oldPrice: "23,000 PKR",
            dealPrice: 20500
        },
        {
            title: "Kids Special Party Deal (10–14 Kids)",
            description:
                "Plain Fries (3 Large), Spring Roll (15), Zinger Burger (6), Anda Shami Burger (6), Shawarma (6), Soft Drinks (1.5L x3)",
            oldPrice: "10,500 PKR",
            dealPrice: 9000
        }
    ];

    return (
        <section className="services" id="services">
            <h2>Our Catering Deals</h2>
            <p className="services-subtitle">
                Ready-made food deals – perfect for events & parties
            </p>

            <div className="services-grid">
                {services.map(deal => (
                    <div className="service-card" key={deal.title}>

                        <h3>{deal.title}</h3>
                        <p>{deal.description}</p>
                        
                        <span className="old-price">{deal.oldPrice}</span>
                        <span className="new-price">{deal.dealPrice} PKR</span>

                        <button
                            className="deal-cart-btn"
                            onClick={() =>
                                addToCart({
                                    name: deal.title,
                                    price: deal.dealPrice
                                })
                            }
                        >
                            Add Deal to Cart
                        </button>


                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;
