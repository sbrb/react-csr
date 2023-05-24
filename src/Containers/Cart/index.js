import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatPrice } from "../../CommonUtils/commonUtils";
import { Link } from "react-router-dom";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart
} from "../../Store/cartSlice";
import "./Cart.css";
import Table from "react-bootstrap/Table";
import { BsFillCartCheckFill, BsTrash } from "react-icons/bs";
// import { Helmet } from "react-helmet";


const CartPageContainer = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount} = useSelector((state) => state.cart);
  //console.log('itemsCount',itemsCount,'totalAmount',totalAmount)

  const checkOutHandler = ()=>{
    // console.log(carts)
  }
  if (carts.length === 0) {
    return (
      <>
        {/* <Helmet>
          <html lang="en" />
          <title>Cart</title>
          <meta name='keywords' content='add to cart, ecomerce, cart' />
          <meta
            name="description"
            content="Description for add To cart"
          />
        </Helmet> */}

        <div className="container">
          <div className="emptyCart">
            <div className="topText">
              <BsFillCartCheckFill />
              <span className="textGray">Your Cart Is Empty.</span>
            </div>
            <Link to="/" className="shoppingBtn cart_btn btn-dark">
              Continue Shopping Now
            </Link>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <div className="cart">
      {/* <Helmet>
        <html lang="en" />
        <title>Cart</title>
        <meta name='keywords' content='add to cart, ecomerce, cart' />
        <meta
          name="description"
          content="Description for add To cart"
        />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet> */}

      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, idx) => {
              return (
                <tr key={cart?.id}>
                  <td className="cartIndex">{idx + 1}</td>
                  <td className="cartTitle">
                    {cart?.title}
                    <img src={cart?.images[0]} alt={cart?.title} title={cart?.title} />
                  </td>
                  <td className="price">
                    {formatPrice(cart?.discountedPrice)}
                  </td>
                  <td className="qtyBtnSec">
                    <div className="quatityBtnGroup">
                      <span
                        className="qtyBtn"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))
                        }
                      >
                        -
                      </span>
                      <span className="qty-value">{cart?.quantity}</span>
                      <span
                        className="qtyBtn"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))
                        }
                      >
                        +
                      </span>
                    </div>
                  </td>
                  <td>{formatPrice(cart?.totalPrice)}</td>
                  <td>
                    <button
                      className="cart_btn" 
                      onClick={() => dispatch(removeFromCart(cart?.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div>
          <div className="totalSec">
            <button className="cart_btn" onClick={() => dispatch(clearCart())}>
              <BsTrash />
              Clear Cart
            </button>
            <div className="totlaAmount">
                <span>Total items:- {itemsCount}</span>
                <span>Total prices:- 
                    {
                      `${formatPrice(totalAmount)}`
                    }
                </span>
            </div>
            <button className="cart_btn" onClick={checkOutHandler} variant="success">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageContainer;
