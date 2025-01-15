import React from 'react'
import ProductCard from "./ProductCard"

function ProductList() {

    const products = [
        { name: "Swing", image: "public/swing.jpg", price: "10.99", id: "product1" },
        { name: "Storage Bench", image: "public/storage-bench.jpg", price: "20.99", id: "product2" },
        { name: "Chair", image: "public/chair.jpg", price: "30.99", id: "product3" },
        { name: "Organizer", image: "public/storage-box.jpg", price: "40.99", id: "product4" },
        { name: "Bloom Diffuser", image: "public/bloom-diffuser.jpg", price: "50.99", id: "product5" },
        { name: "Kids Chair", image: "public/kids-chair.jpg", price: "60.99", id: "product6" },
        { name: "Desk decor", image: "public/desk-decor.jpg", price: "70.99", id: "product7" },
        { name: "Wall Clock", image: "public/wall-clock.jpg", price: "80.99", id: "product8" }
    ]

    return (
        <div>
            <div className="cards-grid flex flex-wrap justify-evenly mt-5">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>

    )
}

export default ProductList