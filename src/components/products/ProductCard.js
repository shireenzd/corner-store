import React from 'react'

function ProductCard({product}) {

    return (
        <div>
            <div className="shadow-md card m-5" key={product.id}>
                <div className="overflow-hidden">
                    <img src={product.image} alt="product" className="images"/>
                </div>
                <div className="flex justify-between items-center p-4">
                    <h6 className="text-lg font-semibold">{product.name}</h6>
                    <i className="fa-regular fa-heart cursor-pointer" id="icon" onClick="toggleColor(this)"></i>
                </div>
                <div className="flex justify-between items-center p-4 border-t">
                    <p className="text-xl font-bold">${product.price}</p>
                    <button data-product-identifier="{product.id}" className="card-button text-white p-2 rounded-lg transition-colors" onClick="addItemToCart('${product.id}')">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard