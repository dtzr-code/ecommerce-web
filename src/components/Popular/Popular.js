import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import { addToCart } from "../../slices/cartSlice";
import { proteins, supplements } from "../../items/products";

function Popular() {
  const dispatch = useDispatch();

  const addItem = (id, name, price, description, image) => {
    const product = {
      id,
      name,
      price,
      description,
      image,
    };

    //Sending the product as an action to the REDUX store
    dispatch(addToCart(product));
  };

  return (
    <div className="popular__container">
      <h1> MEET THE BEST OF THE BEST </h1>
      <div className="items__wrapper">
        <div className="items--contents">
          {proteins.map((protein) => {
            return (
              <div className="products--container" key={protein.id}>
                <div className="image--wrapper">
                  <img className="protein--image" src={protein.image}></img>
                </div>
                <div className="description">
                  <h1 className="name"> {protein.name} </h1>
                  <h2 className="price"> ${protein.price}</h2>
                  <p className="product-desc">{protein.description}</p>
                  <a href="/" className="learnMore">
                    Learn More
                  </a>
                  <div className="buttons">
                    <button
                      type="submit"
                      onClick={() =>
                        addItem(
                          protein.id,
                          protein.name,
                          protein.price,
                          protein.description,
                          protein.image
                        )
                      }
                      className="buy"
                    >
                      Buy
                    </button>
                    <button type="submit" className="subscribe">
                      Suscribe $75/month
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="bars__h1">
          THE <span>PERFECT</span> COMBINATION
        </h1>
        <div className="bars--wrapper">
          {supplements.map((supplement) => {
            return (
              <div className="bars--container" key={supplement.id}>
                <div className="bars__image--wrapper">
                  <img className="bars--image" src={supplement.image}></img>
                </div>
                <div className="bars__description">
                  <h2 className="bars__name"> {supplement.name}</h2>
                  <h2 className="bars__price"> ${supplement.price}</h2>
                  <p className="bars__product-desc">{supplement.description}</p>
                </div>
                <div className="bars__buttons">
                  <button
                    type="submit"
                    onClick={() =>
                      addItem(
                        supplement.id,
                        supplement.name,
                        supplement.price,
                        supplement.description,
                        supplement.image
                      )
                    }
                    className="buy"
                  >
                    Buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Popular;
