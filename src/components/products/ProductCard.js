import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';

function ProductCard({ product }) {
    const toggleColor = (event) => {
        event.currentTarget.classList.toggle('clicked');
    };

    const addItemToCart = (productId) => {
        console.log(`Added product with ID: ${productId} to cart`);
    };

    return (
        <div key={product.id}>
            <div className="shadow-md card m-5">
                <div className="overflow-hidden">
                    <img src={product.image} alt={product.name} className="images" />
                </div>
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
                        data-product-identifier={product.id}
                        className="card-button text-white p-2 rounded-lg transition-colors"
                        onClick={() => addItemToCart(product.id)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;