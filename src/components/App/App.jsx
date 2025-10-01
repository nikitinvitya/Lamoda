import React, {useEffect, useMemo, useState} from 'react';
import classes from './App.module.css'
import ProductList from "../ProductList/ProductList.jsx";
import SearchFilter from "../SearchFilter/SearchFilter.jsx";
import ProductsQuantity from "../ProductsQuantity/ProductsQuantity.jsx";
import SortControls from "../SortControls/SortControls.jsx";
import sortProducts from "../../utils/sortProducts/sortProducts.js";
import Filters from "../Filters/Filters.jsx";
import Header from "../Header/Header.jsx";
import {PRODUCTS_NUMBER, MAX_PRICE, MIN_PRICE} from "../../utils/constants/constants.js";
import generateProduct from "../../utils/generateProducts/generateProduct.js";
import {filterByColor, filterByPrice, searchFilter} from "../../utils/filters/filters.js";
import {changeSelectedColor, getProductsColors} from "../../utils/helpers/helpers.js";
import NotFound from "../NotFound/NotFound.jsx";


const App = () => {
    const [products, setProducts] = useState([])
    const [minFilterPrice, setMinFilterPrice] = useState(MIN_PRICE)
    const [maxFilterPrice, setMaxFilterPrice] = useState(MAX_PRICE)
    const [searchParam, setSearchParam] = useState('')
    const [selectedColor, setSelectedColor] = useState([])


    useEffect(() => {
        setProducts(generateProduct(PRODUCTS_NUMBER));
    }, []);


    const sortByPrice = (method) => setProducts(sortProducts(products, method, 'price'))
    const sortByRating = (method) => setProducts(sortProducts(products, method, 'rating'))


    const filteredProducts = useMemo(() => {
        const filterFunctions = [
            products => filterByPrice(products, minFilterPrice, maxFilterPrice),
            products => searchFilter(products, searchParam),
            products => filterByColor(products, selectedColor)
        ];

        return filterFunctions.reduce(
            (filteredResult, filterFn) => filterFn(filteredResult),
            [...products]
        );
    }, [products, minFilterPrice, maxFilterPrice, searchParam, selectedColor])

    const productColors = getProductsColors(products)

    return (
        <div className={classes.container}>
            <header>
                <Header/>
            </header>
            <main>
                <div className={classes.searchFilter}>
                    <SearchFilter setSearchParam={setSearchParam}/>
                </div>

                <div className={classes.sorts}>
                    <SortControls sortByRating={sortByRating} sortByPrice={sortByPrice}/>
                </div>

                <aside>
                    <Filters changeSelectedColor={(color) => changeSelectedColor(color, selectedColor, setSelectedColor)}
                             colors={productColors}
                             setMinFilterPrice={setMinFilterPrice}
                             setMaxFilterPrice={setMaxFilterPrice}
                             setSearchParam={setSearchParam}/>
                    <ProductsQuantity productCount={filteredProducts.length}/>
                </aside>

                <section>
                    {
                        filteredProducts.length
                            ?
                            <ProductList products={filteredProducts}/>
                            :
                            <NotFound/>
                    }

                </section>
            </main>
        </div>
    );
};

export default App;