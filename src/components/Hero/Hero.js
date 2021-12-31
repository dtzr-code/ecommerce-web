import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import { selectItems } from "../../slices/cartSlice";
import { selectUser } from "../../slices/userSlice";
import Cart from "../Cart/Cart";
import Signin from "../Signin/Signin";
import Signout from "../Signout/Signout";
import "./styles.css";

const stripeTestPromise = loadStripe(
  `${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`
);

function Hero() {
  const user = useSelector(selectUser);

  //For opening and closing the cart
  const [open, setOpen] = useState(false);
  const HandleOpen = () => {
    setOpen(!open);
  };

  //select from the items, take the length and render it on top of the cart icon
  const items = useSelector(selectItems);

  //Showing signin/register modal
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(!openModal);
  };

  //To show a pop up showing user email
  const [showUser, setShowUser] = useState(false);

  return (
    <div className="Hero__Wrapper">
      <div className="Hero__Image">
        <div className="Background__Overlay">
          {open ? (
            <Elements stripe={stripeTestPromise}>
              <Cart open={open} setOpen={setOpen} />
            </Elements>
          ) : null}
          <div className="Nav__Wrapper">
            <div className="Hero__Nav">
              <div className="Hero__Links__1">
                <a href="/" className="shop">
                  Shop
                </a>
                <a href="/" className="posts">
                  Posts
                </a>
                <a href="/" className="about">
                  About us
                </a>
              </div>
              <div className="Hero__Links__2">
                <Icon
                  onMouseOver={() => setShowUser(true)}
                  onMouseLeave={() => setShowUser(false)}
                  onClick={showModal}
                  name="user outline"
                />
                {openModal && !user ? (
                  <Signin openModal={openModal} setOpenModal={setOpenModal} />
                ) : (
                  <Signout openModal={openModal} setOpenModal={setOpenModal} />
                )}

                {showUser ? (
                  <div className="user__popup">
                    {user ? (
                      <p>Logged in as {user.email}</p>
                    ) : (
                      <p> Please sign in </p>
                    )}
                  </div>
                ) : null}

                <span className="count"> {items ? items.length : 0} </span>
                <Icon onClick={HandleOpen} name="shopping cart" />
              </div>
            </div>
          </div>
          <h1 className="Tagline">
            The only bad workout is the one you didn’t do.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
