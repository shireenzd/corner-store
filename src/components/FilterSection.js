import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import ProductCard from "./products/ProductCard";

function FilterSection({ products }) {
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State to manage search visibility
    const [filteredProducts, setFilteredProducts] = useState([]); // Initialize with an empty array
    const [maxPrice, setMaxPrice] = useState(0); // State to manage max price filter
    const [searchTerm, setSearchTerm] = useState(""); // State to manage search term filter
    const [isFiltering, setIsFiltering] = useState(false); // State to track if filtering is active
    const [sortedProducts, setSortedProducts] = useState(products); // New state to store sorted products

    // Sorting functions
    const sortPriceAsc = (arrayOfItems) => {
        return arrayOfItems.sort((prod1, prod2) => prod1.price - prod2.price);
    };

    const sortPriceDesc = (arrayOfItems) => {
        return arrayOfItems.sort((prod1, prod2) => prod2.price - prod1.price);
    };

    const handleSortAsc = () => {
        const sortedArr = sortPriceAsc([...products]);
        setSortedProducts(sortedArr);
    };

    const handleSortDesc = () => {
        const sortedArr = sortPriceDesc([...products]);
        setSortedProducts(sortedArr);
    };

    // Filtering logic
    const filterProducts = (maxPrice, searchTerm) => {
        let filtered = products.filter((product) => {
            const productPrice = parseFloat(product.price);
            if (maxPrice > 0 && !isNaN(maxPrice) && productPrice >= maxPrice) {
                return false;
            }
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setFilteredProducts(filtered);
        setIsFiltering(maxPrice > 0 || searchTerm.trim() !== "");
    };

    // Event handlers for search and price filtering
    const showSearch = (event) => {
        event.preventDefault();
        setIsSearchVisible(true);
    };

    const hideSearch = (event) => {
        event.preventDefault();
        setIsSearchVisible(false);
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

    return (
        <div>
            <div className="flex justify-between px-10 pb-4">
                <h1 className="text-white">Search</h1>
                <h1 className="text-white pr-5">Sort Price</h1>
            </div>
            <nav className="flex mx-8 p-4 rounded-lg">
                <div className="w-full flex justify-between items-center">
                    <div onClick={showSearch} className="cursor-pointer" >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <div className={`${isSearchVisible ? '' : 'hidden'} flex items-center`} id="store-search">
                        <label htmlFor="price-limit" className="text-sm whitespace-nowrap text-white">Price Limit:</label>
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
                        <span onClick={handleSortAsc} className="sort-asc p-2 bg-gray-600 rounded-lg cursor-pointer hover:bg-gray-500 text-white">
                            Asc <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <span onClick={handleSortDesc} className="sort-desc p-2 bg-gray-600 rounded-lg cursor-pointer hover:bg-gray-500 text-white">
                            Desc <FontAwesomeIcon icon={faArrowDown} />
                        </span>
                    </div>
                </div>
            </nav>

            {isFiltering ? (
                <div className="cards-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="cards-grid">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default FilterSection;