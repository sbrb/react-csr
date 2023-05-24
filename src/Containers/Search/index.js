import './Search.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderComponents from '../../Components/Loader';
import ProductListItemComponents from '../../Components/ProductListItem';
import { STATUS } from '../../CommonUtils/status';
import { useSelector, useDispatch } from 'react-redux';
import Slider from "@material-ui/core/Slider";
import { fetchAsyncSearchProduct, getSearchProducts, getSearchProductsStatus, clearSearch } from '../../Store/searchSlice';


const SearchContainerPage = () => {

  const dispatch = useDispatch();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  const params = useParams();
  const searchText = params.searchKey;

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsyncSearchProduct(searchText));
    // eslint-disable-next-line
  }, [searchText]);

  const [selectedPrice, setSelectedPrice] = useState([0, 2000]);
  const [list, setList] = useState(searchProducts);

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = searchProducts;
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setList(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedPrice]);


  if (searchProducts.length === 0) {
    return (
      <div className='container'>
        <div className='text-danger'>
          <h3>No Products found.</h3>
        </div>
      </div>
    )
  }


  return (
    <>
      <Slider
        className='price_range'
        value={selectedPrice}
        onChange={handleChangePrice}
        valueLabelDisplay="on"
        min={0}
        max={2000}
      />
      {searchProductsStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={searchText} products={list} />}
    </>
  )
}

export default SearchContainerPage;


