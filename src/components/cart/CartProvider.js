import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children, product }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + parseFloat(product.price));
  };

  const removeItemFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    const removedProduct = cart.find((product) => product.id === productId);
    if (removedProduct) {
      const newTotalPrice = totalPrice - parseFloat(removedProduct.price);
      setTotalPrice(newTotalPrice >= 0 ? newTotalPrice : 0);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, totalPrice, product }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };