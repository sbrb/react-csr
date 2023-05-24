import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { formatPrice } from '../../CommonUtils/commonUtils';

const SingleProductComponent = ({ product }) => {
    return (
        <Link className='singleProduct' to={`/product/${product?.id}`} key={product?.id}>

            <Card>
                <Card.Img variant="top" src={product?.images[0]} alt={product.title} />
                <Card.Body>
                    <Card.Title>{product?.title}</Card.Title>
                    <div className='productItem'>

                        {product?.category}
                        <div className='brand'>
                            <span>Brand: </span>
                            <span className='brandInfo'>{product?.brand}</span>
                        </div>
                        <div className='discount'>
                            <span>Discount: </span>
                            ({product?.discountPercentage}% Off)
                        </div>
                        <div className='old-price'>
                            {formatPrice(product?.price)}
                        </div>
                        <div className='new-price'>
                            {formatPrice(product?.discountedPrice)}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default SingleProductComponent