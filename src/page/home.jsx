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
import Soupe from "../AutreMenu/Soupe";
import { BrowserRouter, Routes ,Route,useNavigate } from "react-router-dom";
import Carte from "../component/carte.jsx";
import SystemeCrousel from "../component/Carousel.jsx";
import MenuBurger from "../AutreMenu/Burger.jsx";
import CarteCrudite from "../AutreMenu/Cruditee.jsx";
import imgCrudité from "../image/imgCrudité.jpeg";
import Footer from "../component/footer.jsx";
import Riz from "../AutreMenu/Riz.jsx";
import Jus from "../AutreMenu/Jus.jsx";
import SignePlus from "../assets/SignePlus.svg";
import SigneMoin from "../assets/SigneMoin.svg";
import list from '../data';
import Cards from '../component/Card';

function Home({handleClick}){
  const navigate = useNavigate();

  const handeclic = () =>{

    navigate("/Soupe");
   
  };
  const handeclic1 = () =>{
    navigate("/Burger");
  }
  const handeclic2 = () =>{
    navigate("/Cruditee");
  }
  const handeclic3 = () =>{
    navigate("/Riz");
  }
  const handeclic4 = () =>{
    navigate("/Jus");
  }
  const [count, setCount] = useState(0);


  const Bouttonincrmente = () =>{
    setCount (count+1);
  }
  const BouttonDecrmentation = () =>{
    if (count>0){
    setCount (count-1);
  }
  }

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
      
        <Routes>
          <Route path="/Soupe" element = {<Soupe/>}/>
          <Route path="/Burger" element = {<MenuBurger/>}/>
          <Route path="/Cruditee" element = {<CarteCrudite/>}/>
          <Route path="/Riz" element ={<Riz/>}/>
          <Route path="/Jus" element ={<Jus/>}/>

        </Routes>
        
        <Container className="BarreDeMenu" >
      <Row>
        
        <Col xs={4} md={2} lg={2}>
        <Image className="ImageDeMenu" src={image2} onClick={handeclic4}   roundedCircle/> 
          <p className="SousTitre" >Jus</p>
          
        </Col>
        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={Burger} onClick={handeclic1} roundedCircle />
          <p className="SousTitre" >Burger</p>
        </Col>
        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={imgCrudité} onClick={handeclic2} roundedCircle />
          <p className="SousTitre" >crudité</p>
        </Col>
        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={image2} onClick={handeclic} roundedCircle />
          <p className="SousTitre" >Soupe</p>
        </Col>
        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={image2} onClick={handeclic3} roundedCircle />
          <p className="SousTitre" >Riz</p>
        </Col>
      </Row>
      
      
    </Container>
     <img src="src\image\ligne.png" alt="ligne" className="ligne" />
    </section>
    <div className="All_Cards">
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} />
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