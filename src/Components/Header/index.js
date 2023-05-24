import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import TopCateHeaderComponents from '../TopCateHeader'
import { getAllCarts, getCartTotal } from '../../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart } from '@mui/icons-material';

const HeaderComponents = () => {
  const carts = useSelector(getAllCarts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal())
    // eslint-disable-next-line
  }, [carts])
  return (
    <div className='na_wrapper'>
      <div className='nav_bar'>
        
            <Link className="nav-link" to="/">
          <strong>My Shop</strong>
            </Link>
          <TopCateHeaderComponents />
              <Link className="nav-link" to="/cart">
                <ShoppingCart className='cart_icon' />
                {
                  carts && carts.length && carts.length > 0 ? <span className='cart_badge'>{carts.length}</span> : ''
                }
              </Link>
      </div>
    </div>
  )
}

export default HeaderComponents;