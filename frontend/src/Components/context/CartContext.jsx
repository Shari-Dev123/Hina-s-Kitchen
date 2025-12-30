import { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i =>
          i.name === item.name ? { ...i, qty: (i.qty || 1) + (item.qty || 1) } : i
        );
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCartItems(prev => prev.filter(i => i.name !== name));
  };

  const updateQty = (name, qty) => {
    setCartItems(prev =>
      prev.map(i => (i.name === name ? { ...i, qty } : i))
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + (item.qty || 1), 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price * (item.qty || 1)),
    0
  );

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQty,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
