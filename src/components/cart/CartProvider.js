import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children, product }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [animatingProductId, setAnimatingProductId] = useState(null);

  const addItemToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
      setTotalPrice(totalPrice + parseFloat(product.price));
      setAnimatingProductId(product.id);
      setTimeout(() => {
        setAnimatingProductId(null);
      }, 500);
    }
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
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, totalPrice, product, animatingProductId }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };