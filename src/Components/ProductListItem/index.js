import React from 'react';
import "./ProductListItem.css";
import SingleProductComponent from "../SingleProductComponent";

const ProductListItemComponents = ({ products, category }) => {
  return (
    <div className="productSection">

      <div className="wrapTitle">
        <h3 className="sectionTitle">{category}</h3>
      </div>
      <div className='productLists'>
        {
          products.map(product => {
            let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));

            return (
              <SingleProductComponent key={product.id} product={{ ...product, discountedPrice }} />
            )
          })
        }
      </div>

    </div>
  )
}

export default ProductListItemComponents