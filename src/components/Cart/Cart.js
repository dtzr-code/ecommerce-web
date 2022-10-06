import React, { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  selectItems,
  selectTotal,
  increaseQty,
  decreaseQty,
} from "../../slices/cartSlice";
import { selectUser } from "../../slices/userSlice";
import Signin from "../Signin/Signin";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
function Cart({ open, setOpen }) {
  //For checking user status
  const user = useSelector(selectUser);

  //To display cart items
  const items = useSelector(selectItems);

  //To display total price
  const total = useSelector(selectTotal);

  //To remove item from cart
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  //Showing sign in modal --> in order to checkout
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(!openModal);
  };

  //For adding qty of items
  const addQty = (id) => {
    dispatch(increaseQty({ id }));
  };

  //For decreasing qty of items
  const minusQty = (id) => {
    dispatch(decreaseQty({ id }));
  };

  //creating stripe payment
  const handleStripe = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    //Call your backend to create the Checkout Session
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        items: items,
        email: user.email,
      }),
    });
    console.log(response);

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="cart__container">
      <div className="cart__wrapper">
        <div className="cart__header">
          <h1>Your Cart</h1>
          <p className="close--icon" onClick={() => setOpen(!open)}>
            x
          </p>
        </div>

        {/* Cart Items */}
        <div className="item--wrapper">
          {items.map((item) => (
            <div className="single__product--wrapper" key={item.id}>
              <img className="product_img" src={item.image} alt="product_img" />
              <div className="product__details">
                <p className="product_name">{item.name}</p>
                <p className="product_price"> ${item.price} </p>
                <div className="product__settings">
                  <div className="product__counter">
                    <button
                      className="cart__button"
                      onClick={() => minusQty(item.id)}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="cart__button"
                      onClick={() => addQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <p onClick={() => removeItem(item.id)}>REMOVE</p>
                </div>
              </div>
              <h2 className="product__price">${item.price * item.quantity}</h2>
            </div>
          ))}
        </div>

        <div className="subtotal">
          <p>Sub-total: </p>
          <p>${total}</p>
        </div>

        {/* Checkout button */}
        <button
          onClick={user ? handleStripe : () => showModal()}
          className="checkout--button"
        >
          {user ? "Checkout" : "Sign In To Checkout"}
        </button>

        {openModal ? (
          <Signin openModal={openModal} setOpenModal={setOpenModal} />
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
