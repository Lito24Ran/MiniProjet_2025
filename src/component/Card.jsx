import React, { createContext, useContext, useState } from "react";
import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Panier from "../page/Panier";
import produitContext from "../page/home";

const Cards = ({ item, handleClick }) => {
  const { id, nom, description, prix, img } = item;
  const [article, setarticle] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [showStars, setShowStars] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(-1);
  const [selectedStar, setSelectedStar] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <div className="cards_container">
      <img src="src\image\font.png" alt="font" className="font" />
      <div className="card" onMouseLeave={() => setShowStars(false)}>
        <div className="tete">
          <img className="carteimage" src={img} alt="Image" />
          <img className="avis" src="" alt="avis" />
        </div>
        <div
          className="star-container"
          onClick={() => setShowStars(!showStars)}
        >
          {!showStars ? (
            <span className="star-icon">★</span>
          ) : (
            [...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${
                  index <= (hoveredStar !== -1 ? hoveredStar : selectedStar - 1)
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() => setHoveredStar(index)}
                onMouseLeave={() => setHoveredStar(-1)}
                onClick={(e) => {
                  setSelectedStar(index + 1);
                }}
              >
                ★
              </span>
            ))
          )}
        </div>
        <div className="body">
          <div className="card_text">
            <p className="titre_card">{nom}</p>

            <p className="prix">
              <b>{prix} Ar</b>{" "}
            </p>
            <div className="quantity-controls">
              <button className="quantity-controls1 " onClick={decrement}>
                -
              </button>
              <span className="qtt">{quantity}</span>
              <button className="quantity-controls2 " onClick={increment}>
                +
              </button>
            </div>
            <p className="description">
              <b>Ingredient: </b>
              {description}
            </p>
            <button
              onClick={() => handleClick({ ...item, quantity: quantity || 1 })}
              className="ajouter"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
