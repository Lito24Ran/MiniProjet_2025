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
    <div className="backcaroussel">
      <img src="src\image\back.png" alt="back" className="backimage"/>
    </div>  
         <Carousel className='Carousel'>

      <Carousel.Item className='Les_Carousel'>
        <img className="Carousel_background" src="src\image\car snack.jpg" alt="snack" />
        <Carousel.Caption className='caroussel_text_1'>
          <h3 className='titre'>Snack</h3>
          <p className='titre_bas'>Avec un de très bon pomme de terre et un peut de sel et du poivre</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item className="Les_Carousel">
      <img className="Carousel_background" src="src\image\car repas.jpg" alt="image2" />
        <Carousel.Caption className='caroussel_text'>
          <h3 className='titre'>Repas</h3>
          <p className='titre_bas'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="Les_Carousel">
        <img className="Carousel_background" src="src\image\car boisson.jpg" alt="soupe" />
        <Carousel.Caption className='caroussel_text_1'>
          <h3 className='titre'>Soupe </h3>
          <p className='titre_bas'>Ingrédients: blabla ,blabla</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
    );
}
export  default SystemeCrousel;