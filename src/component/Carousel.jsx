import React from "react";
import frite from "../image/frite.png";
import image2 from "../image/image2.png";
import SoupeSpecial from "../image/SoupeSpecial.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Bolonaise from "../image/Bolonaise.jpg";

function SystemeCrousel() {
  return (
    <div className="carouselContainer">
      <div className="backcaroussel">
        <img src="src\image\back.png" alt="back" className="backimage" />
      </div>
      <Carousel className="Carousel">
        <Carousel.Item className="Les_Carousel">
          <img
            className="Carousel_background"
            src="src\image\C1.jpg"
            alt="snack"
          />
          <Carousel.Caption className="caroussel_text_1">
            <img src="src\image\street.png" alt="snack" className="img_car1" />
            <h3 className="titre">Snack et Street Food</h3>
            <p className="titre_bas">Princi Burger , Christo Tacos</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="Les_Carousel">
          <img
            className="Carousel_background"
            src="src\image\C2.jpg"
            alt="image2"
          />
          <Carousel.Caption className="caroussel_text">
            <img src="src\image\viande.png" alt="viandes" className="img_car" />
            <h3 className="titre">Specialites Viandes</h3>
            <p className="titre_bas">Brochette Lito , Kebab Bunny</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="Les_Carousel">
          <img
            className="Carousel_background"
            src="src\image\C3.jpg"
            alt="soupe"
          />
          <Carousel.Caption className="caroussel_text_1">
            <img src="src\image\plats.png" alt="plats" className="img_car1" />
            <h3 className="titre">Plats Gourmands</h3>
            <p className="titre_bas">Bolog-Naj , Chicken Vic</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default SystemeCrousel;
