import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { clearCart, selectItems, selectTotal } from "../slices/cartSlice";
import { selectUser } from "../slices/userSlice";
import "./styles.css";

function Success() {
  const history = useHistory();

  const date = { currentTime: new Date().toLocaleString() };
  const currentdate = date.currentTime.split(",")[0]

  const items = useSelector(selectItems);
  const user = useSelector(selectUser);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart);
  };

  const HandleClick = () => {
    history.push("/");
    emptyCart();
  };

  return (
    <div className="orders__container">
      <div className="orders_tagline">
        <h1>We have received your order! Thank you and shop again!</h1>
        <h2>Your Orders</h2>
        <h5>{items.length} orders</h5>
      </div>
      <div className="orders">
        <div className="orders__details">
          <p>{currentdate}</p>
        </div>
        {items.map((item) => (
          <div className="item__container">
            <div className="img__wrapper">
              <img src={item.image} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
      <button onClick={HandleClick}>Back To Shopping!</button>
    </div>
  );
}

export default Success;
