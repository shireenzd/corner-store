import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../cart/CartProvider';

function ProductDetails({ products, addToCart }) {
  const { addItemToCart, animatingProductId } = useContext(CartContext);

  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const [color, setColor] = useState(product.colors[0]);

  if (!product) {
    return <div>Product not found</div>;
  }


  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <>
      <hr />
      <div className="mx-auto flex flex-col justify-center h-[70vh] p-10 bg-[#1e1e1e] shadow-md">
        <div className="flex justify-evenly">
          <img src={product.image} alt={product.name} className="w-1/4 rounded-md" />
          <div className="w-1/2 p-5">
            <h1 className="text-3xl font-bold text pb-5">{product.name}</h1>
            <p className="text-lg text pb-5">{product.description}</p>
            <p className="text-2xl font-bold product-price pb-5">Price: ${product.price}</p>
            <div className="flex flex-col w-24">
              <label className="text-lg text pb-5">Color:</label>
              <select value={color} onChange={handleColorChange} className="bg-[#be9f5c] text-lg text p-2 rounded-lg">
                {product.colors.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            <div className="w-full text-end">
              <button onClick={handleAddToCart}
                className={`add-to-cart-button ${animatingProductId === product.id ? 'animate' : ''} bg-be9f5c text-lg rounded-lg mt-5`}>
                Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;