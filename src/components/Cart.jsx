import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, removeCart } from "../components/redux/action/index";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (product) => {
    dispatch(removeCart(product));
  };
  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const delItem = (product) => {
    dispatch(delCart(product));
  };

  const cartItems = (product) => {
    return (
      <div className="my-5 py-4 bg-light rounded-2" key={product.id}>
        <div className="container py-4">
          <button
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => handleClose(product)}
          ></button>
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="200px"
              ></img>
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <h5 className="my-3">${product.price * product.qty}</h5>
              <p className="lead">Quantity: {product.qty}</p>
            </div>
            <div className="col-md-4 d-flex justify-content-spaced-evenly align-items-center">
              <button
                className="btn btn-outline-success fw-bold me-5"
                onClick={() => addItem(product)}
              >
                +
              </button>
              <button
                className="btn btn-outline-danger fw-bold"
                onClick={() => delItem(product)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <>
        <div className="py-5 my-5 bg-light rounded-3">
          <div className="container py-4">
            <div className="d-flex justify-content-center">
              <h3>Your cart is empty</h3>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <NavLink to="/products" className="btn btn-outline-dark">
            Go to Products
          </NavLink>
        </div>
      </>
    );
  };

  const checkoutbtn = () => {
    return (
      <div className="container">
        <div className="row" style={{ margin: "5px" }}>
          <NavLink
            to="/products"
            className="btn btn-outline-dark w-25 ms-5 mb-5"
          >
            Go to Products
          </NavLink>
          <NavLink
            to="/checkout"
            className="btn btn-outline-dark w-25 ms-5 mb-5"
          >
            Proceed to checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length !== 0 && state.map(cartItems)}
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && checkoutbtn()}
    </>
  );
};

export default Cart;
