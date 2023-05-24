import React, { useEffect } from "react";
import LoaderComponents from '../../Components/Loader';
import ProductListItemComponents from '../../Components/ProductListItem';
import { STATUS } from '../../CommonUtils/status';
import SliderSectionComponents from '../../Components/SliderSection';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../Store/productSlice';
import { getAllCategories } from '../../Store/categorySlice';
import { allSeo } from "../../Store/seoSlice";


const HomePageContainer = () => {

  const categories = useSelector(getAllCategories);
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);
  // console.log('categories',categories)
  // console.log('products',products)
  // console.log('productStatus',productStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncProducts(100));
    dispatch(allSeo({ title: "Home", keyword: "Ecommerce, product", description: "test" }));
    // eslint-disable-next-line
  }, []);



  let catBaseProducts_1 = products.filter(product => product.category === categories[0]);
  let catBaseProducts_2 = products.filter(product => product.category === categories[1]);
  let catBaseProducts_3 = products.filter(product => product.category === categories[2]);
  let catBaseProducts_4 = products.filter(product => product.category === categories[3]);
  let catBaseProducts_5 = products.filter(product => product.category === categories[4]);
  let catBaseProducts_6 = products.filter(product => product.category === categories[5]);
  let catBaseProducts_7 = products.filter(product => product.category === categories[6]);
  let catBaseProducts_8 = products.filter(product => product.category === categories[7]);
  let catBaseProducts_9 = products.filter(product => product.category === categories[8]);
  let catBaseProducts_10 = products.filter(product => product.category === categories[9]);
  // console.log(catBaseProducts_2)

  return (
    <>
      <SliderSectionComponents />

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[0]} products={catBaseProducts_1} />}

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[1]} products={catBaseProducts_2} />}

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[2]} products={catBaseProducts_3} />}

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[3]} products={catBaseProducts_4} />}

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[4]} products={catBaseProducts_5} />}

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[5]} products={catBaseProducts_6} />}

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[6]} products={catBaseProducts_7} />}

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[7]} products={catBaseProducts_8} />}

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[8]} products={catBaseProducts_9} />}

      {productStatus === STATUS.LOADING ? <LoaderComponents /> : <ProductListItemComponents category={categories[9]} products={catBaseProducts_10} />}
    </>



  )
}

export default HomePageContainer;