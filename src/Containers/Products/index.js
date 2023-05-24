import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAsyncProductsOfCategory, getAllProductsByCategory } from '../../Store/categorySlice';
import { useSelector, useDispatch } from 'react-redux';
import ProductListItemComponents from '../../Components/ProductListItem';
import LoaderComponents from '../../Components/Loader';
import { STATUS } from '../../CommonUtils/status';

const ProductsPageContainer = ()=>{
    const dispatch = useDispatch(); 
    const CategoriesProducts = useSelector(getAllProductsByCategory);
    const params = useParams();
    const catId = params.catId;
    // console.log(catId, CategoriesProducts);
    useEffect(()=>{
        dispatch(fetchAsyncProductsOfCategory(catId))
        // eslint-disable-next-line
    },[catId])
    return(
        <>
            {CategoriesProducts === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={catId} products={CategoriesProducts} />}
        </>
    )
}

export default ProductsPageContainer;