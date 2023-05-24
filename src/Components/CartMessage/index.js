import React from 'react';
import "./Cartmessage.css";
import { BsFillCheckCircleFill } from "react-icons/bs";


const CartMessage = () => {
  return (
    <div className='cart-message text-center'>
      <div className='cart-message-icon'>
        <BsFillCheckCircleFill />
      </div>
      <h6 className='text-white'>An item has been added to your shopping cart</h6>
    </div>
  )
}

export default CartMessage