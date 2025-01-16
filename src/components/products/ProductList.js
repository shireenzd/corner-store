import React from 'react'
import ProductCard from "./ProductCard"
import FilterSection from '../FilterSection'

function ProductList({ products }) {

    return (
        <>
            <section className="products-list m-10 rounded-lg p-6">
                <FilterSection products={products} />
            </section>
            <div className="cards-grid flex flex-wrap justify-evenly mt-5">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </>
    )
}

export default ProductList