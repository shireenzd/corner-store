import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import ProductCard from "./products/ProductCard";

function FilterSection({ products }) {
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State to manage search visibility
    const [filteredProducts, setFilteredProducts] = useState(products); // State to manage filtered products
    const [maxPrice, setMaxPrice] = useState(0); // State to manage max price filter
    const [searchTerm, setSearchTerm] = useState(""); // State to manage search term filter

    const showSearch = (event) => {
        event.preventDefault(); // Prevent default behavior (page refresh/scroll)
        setIsSearchVisible(true); // Show the search section
    };

    const hideSearch = (event) => {
        event.preventDefault(); // Prevent default behavior (page refresh/scroll)
        setIsSearchVisible(false); // Hide the search section
    };

    const handlePriceChange = (event) => {
        const price = parseFloat(event.target.value);
        setMaxPrice(price);
        filterProducts(price, searchTerm);
    };

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        filterProducts(maxPrice, term);
    };

    const filterProducts = (maxPrice, searchTerm) => {
        let filtered = products.filter((product) => {
            const productPrice = parseFloat(product.price);
            // Filter by price
            if (maxPrice > 0 && !isNaN(maxPrice) && productPrice >= maxPrice) {
                return false;
            }
            // Filter by search term
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredProducts(filtered);
    };

    return (
        <div>
            <div className="flex justify-between px-10 pb-4">
                <h1 className="text-white">Search</h1>
                <h1 className="text-white pr-5">Sort Price</h1>
            </div>
            <nav className="flex mx-8 p-4 rounded-lg">
                <div className="w-full flex justify-between items-center">
                    <div onClick={showSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <div className={`${isSearchVisible ? '' : 'hidden'}`} id="store-search">
                        <label htmlFor="price-limit" className="text-sm text-white">Price Limit:</label>
                        <input
                            type="number"
                            className="border-2 rounded-lg p-1 mx-2"
                            id="price-limit"
                            value={maxPrice}
                            onChange={handlePriceChange}
                        />
                        <label htmlFor="text-input" className="text-sm text-white">Text:</label>
                        <input
                            type="text"
                            className="border-2 rounded-lg p-1 mx-2"
                            id="text-input"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <FontAwesomeIcon icon={faCircleXmark} className="cursor-pointer" onClick={hideSearch} />
                    </div>
                    <div>
                        <span className="sort-asc p-2 bg-gray-600 rounded-lg cursor-pointer hover:bg-gray-500 text-white">
                            Asc <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <span className="sort-desc p-2 bg-gray-600 rounded-lg cursor-pointer hover:bg-gray-500 text-white">
                            Desc <FontAwesomeIcon icon={faArrowDown} />
                        </span>
                    </div>
                </div>
            </nav>

            {/* Display filtered products */}
            <div className="cards-grid">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default FilterSection;