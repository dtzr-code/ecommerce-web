import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Icon } from "semantic-ui-react";
import { clearCart, selectItems, selectTotal } from "../slices/cartSlice";
import "./styles.css";

function Success() {
  const history = useHistory();

  const date = { currentTime: new Date().toLocaleString() };
  const currentdate = date.currentTime.split(",")[0];

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  const HandleClick = () => {
    history.push("/");
    dispatch(clearCart());
  };

  return (
    <div className="orders__container">
      <div className="orders__wrapper">
        <div className="orders_tagline">
          <h1> Order Confirmation </h1>
          <h1>Thank you for your order!</h1>
          <p>
            We have received your order and will contact you as soon as your
            package is shipped.
          </p>
        </div>
        <div className="order__summary">
          <div className="summary_tagline">
            <h3>Order Summary</h3>
            <p>{currentdate}</p>
          </div>
          <div className="orders__details">
            <div className="order__items">
              {items.map((item) => (
                <div className="item__container" key={item.id}>
                  <div className="img__wrapper">
                    <img
                      className="order__img"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <p className="item__name">{item.name} </p>
                  <div className="item__detail">
                    <p className="bold"> SGD ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h1> Order Total</h1>
          <span />
          <div className="order__total">
            <h2> Total Price: </h2>
            SGD ${total}
          </div>
        </div>
        <button className="back" onClick={HandleClick}>
          <Icon size="big" name="arrow circle left" /> Back To Shopping!
        </button>
      </div>
    </div>
  );
}

export default Success;
