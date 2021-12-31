import React from "react";
import { receipes } from "../../items/receipes";
import "./styles.css";

function Receipes() {
  return (
    <div className="receipes__wrapper">
      <h1>Receipes for the gainz</h1>
      <div className="receipes__container">
        {receipes.map((receipe) => {
          return (
            <div className="receipe__container" key={receipe.id}>
              <div className="img--container">
                <img className="receipe_img" src={receipe.image} />
              </div>
              <a className="readmore" href="/">
                Read More
              </a>
              <div className="receipe__details">
                <h1>{receipe.name}</h1>
                <p>{receipe.intro}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Receipes;
