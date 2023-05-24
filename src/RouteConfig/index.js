import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponents from '../Components/Header';
import HomePageContainer from '../Containers/Home';
import CartPageContainer from '../Containers/Cart';
import ProductsPageContainer from '../Containers/Products';
import SingleProductContainer from '../Containers/SingleProduct';
import SearchContainerPage from '../Containers/Search';

const RouteConfigComponents = ()=>{
    return (
        <>
            <BrowserRouter>
                <HeaderComponents />
                <Routes>
                    <Route path="/" element={<HomePageContainer />} />
                    <Route path="/cart" element={<CartPageContainer />} />
                    <Route path="/product/:id" element={<SingleProductContainer />} />
                    <Route path="/products/:catId" element={<ProductsPageContainer />} />
                    <Route path="/search/:searchKey" element={<SearchContainerPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default RouteConfigComponents;