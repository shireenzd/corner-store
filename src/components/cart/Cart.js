import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from './CartProvider';

function Cart() {
  const { cart, removeItemFromCart, totalPrice } = useContext(CartContext);

  // Generate cart item HTML
  const generateCartItemHTML = (product) => {
    return (
      <div key={product.id} className="shadow-md card m-5">
        <div className="overflow-hidden">
          <img src={product.image} alt="product" className="images" />
        </div>
        <div className="cart-item-details p-2">
          <h3 className="product-name">{product.name}</h3>
          <div className="price">${product.price}</div>
        </div>
        <button onClick={() => removeItemFromCart(product.id)}>Remove</button>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <div className="cart-contents flex flex-wrap min-h-[50vh]">
        {cart.map((product) => generateCartItemHTML(product))}
      </div>
      <div className="flex justify-end items-end px-20">
        <div className="cart-total text-white">
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>
      <div className="flex justify-end px-16 mt-4">
        <Link to="/checkout">
        <button>
          Checkout
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;