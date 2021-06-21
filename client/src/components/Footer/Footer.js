import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer__details">
        <h1>Contact Us</h1>
        <div className="footer__container">
          <div className="email__container">
            <input type="email" placeholder="Email" />
            <button type="submit">OK</button>
          </div>
          <p>
            Sign up to receive 10% off your first order. By signing up I agree
            to the <a href="#">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
