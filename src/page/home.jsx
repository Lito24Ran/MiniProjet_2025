import React, { createContext, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import SystemeCrousel from "../component/Carousel.jsx";
import imgCrudité from "../image/imgCrudité.jpeg";
import Footer from "../component/footer.jsx";
import list from '../data';
import Cards from '../component/Card';
import Panier from "./Panier.jsx";

export const produitContext = createContext();

function Home(){
  const navigate = useNavigate();

const [produit, setproduit] = useState([]);

  const handleClic = (path) => {
    navigate(path);
  };

 const hanleclicAddproduct = (item) =>{
  setproduit([...produit,item]);
  console.log(produit);
  
 }
  //EE VICTORIO TS ATO LAH NO MIASA RAHA ANOVA AN' LE CARTE FA AO ANATY carte.jsx
  //DE JEREO AO FA EFA MISY CLASSE MARO2 AO D RENY SISA NO ANTSOIN'LAH RAHA TE ANOVA AN' LE BORDER LAH

  const prix = 12000;   
       

    return(
        <>       
         <Navbar size={6}/>
         <header>
            <div className = "carousel">
            <SystemeCrousel/>
            </div>
         </header>  
      
    
    <section className="mt-4" >
       <div className="BarreDemenu">
    <Container>

      <Row>
        <p className="texts">Voici Les listes de menu</p><br />
        <p className="texts">Nous avons plusieur type de menu dans cet section</p>

        <Col xs={4} md={2} lg={2}>
        <Image className="ImageDeMenu" src={image2} onClick={()=>handleClic("/Jus")}   roundedCircle/> 
          <p className="SousTitre" >Jus</p>
          
        </Col>

        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={Burger}  onClick={()=>handleClic("/Burger")} roundedCircle />
          <p className="SousTitre" >Burger</p>
        </Col>

        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={imgCrudité} onClick={()=>handleClic("/soupe")} roundedCircle />
          <p className="SousTitre" >crudité</p>
        </Col>

        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={image2} onClick={()=>handleClic("/Soupe")} roundedCircle />
          <p className="SousTitre" >Soupe</p>
        </Col>

        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={image2} onClick={()=>handleClic("/Riz")} roundedCircle />
          <p className="SousTitre" >Riz</p>
        </Col>
      </Row>
      <hr />
    </Container>

    </div>  

    
 
    </section>
      <produitContext.Provider value={produit}>
        <div className="All_Cards">
          {
             list.map((item)=>(
               <Cards handleClick={hanleclicAddproduct} item={item} key={item.id} />
             ))
          }
          <Panier/>
        </div>
      </produitContext.Provider>
    <footer>
      <Footer/>
    </footer>
    </>
) ;
}
export default Home;