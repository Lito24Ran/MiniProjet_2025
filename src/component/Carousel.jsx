import React from "react";
import frite from "../image/frite.png";
import image2 from "../image/image2.png";
import SoupeSpecial from "../image/SoupeSpecial.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Bolonaise from "../image/Bolonaise.jpg";
import C1 from "../image/C1.jpg";
import C2 from "../image/C2.jpg";
import C3 from "../image/C3.jpg";
import plats from "../image/plats.png";
import street from "../image/street.png";
import viande from "../image/viande.png";
import back from "../image/back.png";

function SystemeCrousel() {
  return (
    <div className="carouselContainer">
      <div className="backcaroussel">
        <img src={back} alt="back" className="backimage" />
      </div>
      <Carousel className="Carousel">
        <Carousel.Item className="Les_Carousel">
          <img className="Carousel_background" src={C1} alt="snack" />
          <Carousel.Caption className="caroussel_text_1">
            <img src={street} alt="snack" className="img_car1" />
            <h3 className="titre">Snack et Street Food</h3>
            <p className="titre_bas">Princi Burger , Christo Tacos</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="Les_Carousel">
          <img className="Carousel_background" src={C2} alt="image2" />
          <Carousel.Caption className="caroussel_text">
            <img src={viande} alt="viandes" className="img_car" />
            <h3 className="titre">Specialites Viandes</h3>
            <p className="titre_bas">Brochette Lito , Kebab Bunny</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="Les_Carousel">
          <img className="Carousel_background" src={C3} alt="soupe" />
          <Carousel.Caption className="caroussel_text_1">
            <img src={plats} alt="plats" className="img_car1" />
            <h3 className="titre">Plats Gourmands</h3>
            <p className="titre_bas">Bolog-Naj , Chicken Vic</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default SystemeCrousel;
