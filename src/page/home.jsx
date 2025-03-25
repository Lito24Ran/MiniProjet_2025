import React, { useState } from "react";
import Navbar from "../component/navbar";
import frite from "../image/frite.png";
import image2 from "../image/image2.png";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from'react-bootstrap/Image';
import Burger from '../image/burger.png';
import { Routes ,Route,useNavigate } from "react-router-dom";
import SystemeCrousel from "../component/Carousel.jsx";
import imgCrudité from "../image/imgCrudité.jpeg";
import Footer from "../component/footer.jsx";
import list from '../data';
import Cards from '../component/Card';
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";


function Home(){
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  

  const handleClick = (item) => {
    // handleClick doit gerer le quantite alefa any am panier
    const existItem = cart.find(produit => produit.id === item.id);

    if(existItem) {
      // atao Maj le quantite raha efa misy
      setCart(cart.map(produit =>
          produit.id === item.id ? { ...produit, quantity: produit.quantity + item.quantity} : produit
        ));
    } else {
      setCart([...cart, item]);
    }
    console.log(item);
};

  const handleClic = (path) => {
    navigate(path);
  };
 
  //EE VICTORIO TS ATO LAH NO MIASA RAHA ANOVA AN' LE CARTE FA AO ANATY carte.jsx
  //DE JEREO AO FA EFA MISY CLASSE MARO2 AO D RENY SISA NO ANTSOIN'LAH RAHA TE ANOVA AN' LE BORDER LAH

  const prix = 12000;   
       

    return(
        <>       
         <Navbar size={cart.length}/>
         <header>
            <div className = "carousel">
            <SystemeCrousel/>
            </div>
         </header>  
      
    <section className="mt-4" >
       <div className="BarreDemenu">
    <Container>

      <Row>
        <p className="text">Explorer notre menu</p><br />
        <p className="texts">Choisissez parmi notre menu varie, compose d'une selection de plats savoreux. Notre mission est de satisfaire vos envies et d'elever votre experience culinaire</p>
        
        <div className="contenairMenu">
        
         <div className="menu">
          
        <Image className="imagemenu" src="src\image\pates.png" 
          onMouseOver={(e) => (e.currentTarget.src = "src/image/pates1.png")} 
          onMouseOut={(e) => (e.currentTarget.src = "src/image/pates.png")} 
          onClick={()=>handleClic("/Jus")}   roundedCircle/> 
        <span className="SousTitre">Pates</span>
          </div>
          
        <div className="menu">
          <Image className="imagemenu" src="src\image\snack.png"
          onMouseOver={(e) => (e.currentTarget.src = "src/image/snack1.png")} 
          onMouseOut={(e) => (e.currentTarget.src = "src/image/snack.png")} 
           onClick={()=>handleClic("/Burger")} roundedCircle />
          <span className="SousTitre">Snack</span>
          </div>
        
        <div className="menu">
          <Image className="imagemenu" src="src\image\riz.png" 
          onMouseOver={(e) => (e.currentTarget.src = "src/image/riz1.png")} 
          onMouseOut={(e) => (e.currentTarget.src = "src/image/riz.png")} 
           onClick={()=>handleClic("/soupe")} roundedCircle />
          <span className="SousTitre">riz</span>
          </div>
     
        <div className="menu">
          <Image className="imagemenu" src="src\image\dessert.png" 
           onMouseOver={(e) => (e.currentTarget.src = "src/image/dessert1.png")} 
           onMouseOut={(e) => (e.currentTarget.src = "src/image/dessert.png")} 
           onClick={()=>handleClic("/Soupe")} roundedCircle />
          <span className="SousTitre">Dessert</span>
          </div>
      
        <div className="menu">
          <Image className="imagemenu" src="src\image\boisson.png" 
           onMouseOver={(e) => (e.currentTarget.src = "src/image/boisson1.png")} 
           onMouseOut={(e) => (e.currentTarget.src = "src/image/boisson.png")} 
           onClick={()=>handleClic("/Riz")} roundedCircle />
          <span className="SousTitre">Boisson</span>
          </div>
        </div>
      </Row>
      <hr />
    </Container>

    </div>  
 
    </section>
    <div className="All_Cards">
        {
            list.map((item)=>(
                <Cards handleClick={handleClick} item={item} key={item.id} />
            ))
        }
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
) ;
}
export default Home;