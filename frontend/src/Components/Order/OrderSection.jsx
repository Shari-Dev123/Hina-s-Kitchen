import './OrderSection.css';
import { useState } from 'react';
import axios from 'axios';

function OrderSection() {
  const [order, setOrder] = useState({
    items: '',
    deliveryDate: '',
    deliveryTime: '',
    customerName: '',
    contact: '',
    notes: ''
  });

  function handleChange(e) {
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  async function placeOrder() {
    try {
      await axios.post('http://localhost:5000/api/orders/place', order);

      const message = encodeURIComponent(
        `Hello Hina's Kitchen 👋

Order Details:
${order.items}

Delivery Date: ${order.deliveryDate}
Delivery Time: ${order.deliveryTime}
Customer Name: ${order.customerName}
Contact: ${order.contact}
Notes: ${order.notes}`
      );

      window.open(`https://wa.me/923305277853?text=${message}`, '_blank');
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
  }

  return (
    <section className="order" id="order">
      <h2>Place Your Order</h2>

      <div className="order-form">
        <textarea name="items" placeholder="Write your items here" onChange={handleChange} />
        <input type="text" name="customerName" placeholder="Your Name" onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} />
        <input type="date" name="deliveryDate" onChange={handleChange} />
        <input type="time" name="deliveryTime" onChange={handleChange} />
        <textarea name="notes" placeholder="Notes (optional)" onChange={handleChange} />
        <button onClick={placeOrder}>Place Order via WhatsApp</button>
      </div>
    </section>
  );
}

export default OrderSection;
