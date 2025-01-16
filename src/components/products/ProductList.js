import React from 'react'
import ProductCard from "./ProductCard"
import FilterSection from '../FilterSection'

function ProductList({ products }) {

    return (
        <>
            <section className="products-list m-10 rounded-lg p-6">
                <FilterSection products={products} />
                <div className="cards-grid flex flex-wrap justify-evenly mt-5">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductList