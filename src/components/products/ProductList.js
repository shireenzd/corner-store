import React from 'react'
import ProductCard from "./ProductCard"
import FilterSection from '../FilterSection'

function ProductList() {

    const products = [
        { name: "Swing", image: "/swing.jpg", price: "10.99", id: "product1" },
        { name: "Storage Bench", image: "/storage-bench.jpg", price: "20.99", id: "product2" },
        { name: "Chair", image: "/chair.jpg", price: "30.99", id: "product3" },
        { name: "Organizer", image: "/storage-box.jpg", price: "40.99", id: "product4" },
        { name: "Bloom Diffuser", image: "/bloom-diffuser.jpg", price: "50.99", id: "product5" },
        { name: "Kids Chair", image: "/kids-chair.jpg", price: "60.99", id: "product6" },
        { name: "Desk decor", image: "/desk-decor.jpg", price: "70.99", id: "product7" },
        { name: "Wall Clock", image: "/wall-clock.jpg", price: "80.99", id: "product8" }
    ]

    return (
        <>
            <section class="products-list m-10 rounded-lg p-6">
                <FilterSection products={products} />
            </section>
            <div className="cards-grid flex flex-wrap justify-evenly mt-5">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </>
    )
}

export default ProductList