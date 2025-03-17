import React from 'react';
import frite from "../image/frite.png";
import image2 from "../image/image2.png";
import SoupeSpecial from "../image/SoupeSpecial.png";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bolonaise from "../image/Bolonaise.jpg"


function SystemeCrousel() {
return(
<div className="carouselContainer">   
         <Carousel>

      <Carousel.Item >
        <img className="Carousel_image" src={frite} alt="frite" />
        <Carousel.Caption className='caroussel_text'>
          <h3>Frite</h3>
          <p>Avec un de très bon pomme de terre et un peut de sel et du poivre</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item className="Les_Carousel">
      <img className="Carousel_image" src={Bolonaise} alt="image2" />
        <Carousel.Caption className='caroussel_text'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="Les_Carousel ">
        <img className="Carousel_image" src={SoupeSpecial} alt="soupe" />
        <Carousel.Caption className='caroussel_text'>
          <h3>Soupe </h3>
          <p>Ingrédients: blabla ,blabla</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
    );
}
export  default SystemeCrousel;