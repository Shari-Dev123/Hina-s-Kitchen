import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQty, totalPrice } = useContext(CartContext);

  const placeOrder = () => {
    if (!cartItems || cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    let message =
`Hello Hina’s Kitchen 👋

🧾 *New Order Request*

🍽️ *Order Details*
`;

    cartItems.forEach(item => {
      message += `• ${item.name} × ${item.qty} = ${item.price * item.qty} PKR\n`;
    });

    message += `
────────────────────
📅 *Delivery Date:* 
⏰ *Delivery Time:* 

👤 *Customer Name:* 
📞 *Contact Number:* 
📍 *Delivery Address:* 

Thank you for choosing *Hina’s Kitchen* ❤️
Fresh, hygienic & homemade — just for you.
`;

    const whatsappURL = `https://wa.me/923305277853?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="cart" id="order">
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p className="empty-cart">No items added yet</p>}

      {cartItems.map(item => (
        <div className="cart-item" key={item.name}>
          <div className="cart-item-info">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price} PKR × {item.qty} = {item.price * item.qty} PKR</span>
          </div>

          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={e => {
              const value = Number(e.target.value);
              if (value >= 1) updateQty(item.name, value);
            }}
          />

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.name)}
            title="Remove item"
          >
            ❌
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: {totalPrice} PKR</h3>
          <button className="order-btn" onClick={placeOrder}>
            Place Order via WhatsApp
          </button>
        </div>
      )}
    </section>
  );
}

export default Cart;
