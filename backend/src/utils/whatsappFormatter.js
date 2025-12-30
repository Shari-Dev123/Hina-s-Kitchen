export default function formatWhatsAppMessage(order) {
  let message = ` *New Order Received* — Hina’s Kitchen\n\n`;
  message += ` *Order Summary*\n`;

  order.items.forEach(item => {
    message += `• ${item.name} × ${item.quantity}\n`;
  });

  message += `\n *Delivery Schedule*\n`;
  message += ` Date: ${order.deliveryDate}\n`;
  message += ` Time: ${order.deliveryTime}\n`;

  message += `\n *Customer Details*\n`;
  message += `Name: ${order.customerName}\n`;
  message += ` Contact: ${order.contact}\n`;

  message += `\n Thank you for choosing *Hina’s Kitchen*`;

  return encodeURIComponent(message);
}
