import FilterSection from '../FilterSection'

function ProductList({ products }) {

    return (
        <>
            <section className="products-list m-10 rounded-lg p-6">
                <FilterSection products={products} />
            </section>
        </>
    )
}

export default ProductList