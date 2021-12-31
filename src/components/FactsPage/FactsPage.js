import React from "react";
import "./styles.css";
import "../../items/facts";
import { facts } from "../../items/facts";
import { Parallax } from "react-parallax";

function FactsPage() {
  return (
    <div className="factsPage__wrapper">
      <Parallax
        bgImage="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        strength={100}
        style={{ height: "100vh" }}
      >
        <div className="background__overlay">
          <h1>
            ALL YOU <span>NEED</span> TO KNOW
          </h1>
          <div className="facts__wrapper">
            {facts.map((fact) => {
              return (
                <div className="fact__container" key={fact.id}>
                  <div className="fact__desc">
                    <h3>{fact.title}</h3>
                    <p>{fact.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default FactsPage;
