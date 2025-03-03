import { useContext } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../cart/CartProvider';

function ProductCard({ product }) {
  const { addItemToCart, animatingProductId } = useContext(CartContext);

  const toggleColor = (event) => {
    event.currentTarget.classList.toggle('clicked');
  };

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <div key={product.id}>
      <div className="shadow-md card m-5">
        <Link to={`/products/${product.id}`}>
          <div className="overflow-hidden">
            <img src={product.image} alt={product.name} className="images" />
          </div>
        </Link>
        <div className="flex justify-between items-center p-4">
          <h6 className="text-lg font-semibold">{product.name}</h6>
          <FontAwesomeIcon icon={faHeart}
            className="cursor-pointer" id="icon"
            onClick={toggleColor}
          />
        </div>
        <div className="flex justify-between items-center p-4 border-t">
          <p className="text-xl font-bold">${product.price}</p>
          <button
            className={`add-to-cart-button ${animatingProductId === product.id ? 'animate' : ''} card-button text-white p-2 rounded-lg transition-colors`}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;