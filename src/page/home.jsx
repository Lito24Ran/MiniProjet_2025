import React from "react";
import Navbar from "../component/navbar";
import frite from "../image/frite.png";
import image2 from "../image/image2.png";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from'react-bootstrap/Image';
import Burger from '../image/Burger.png';
import Soupe from "../AutreMenu/Soupe";
import { BrowserRouter as Router, Routes ,Route,useNavigate } from "react-router-dom";
import Carte from "../component/carte.jsx";
import SystemeCrousel from "../component/Carousel.jsx";
import  Stack  from "react-bootstrap/Stack";
import MenuBurger from "../AutreMenu/Burger.jsx";
import CarteCrudite from "../AutreMenu/Cruditee.jsx";
import imgCrudité from "../image/imgCrudité.jpeg";

function Home(){
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
  const prix = 12000;

    return(
        <>       
         <Navbar/>
         <header>
            <SystemeCrousel/>
         </header>

    
    <main className="mt-4" >
      
        <Routes>
          <Route path="/Soupe" element = {<Soupe/>}/>
          <Route path="/Burger" element = {<MenuBurger/>}/>
          <Route path="/Cruditee" element = {<CarteCrudite/>}/>
        </Routes>
        <Container className="BarreDeMenu" >
      <Row>
        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={frite}  roundedCircle/> 
          <p className="SousTitre text-align-center" >Frite</p>
        </Col>
        <Col xs={4} md={2} lg={2}>
        <Image className="ImageDeMenu" src={image2} onClick={handeclic}  roundedCircle/> 
          <p className="SousTitre" >Mine-sao</p>
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
          <Image className="ImageDeMenu" src={image2} roundedCircle />
          <p className="SousTitre" >Soupe</p>
        </Col>
        <Col xs={4} md={2} lg={2}>
          <Image className="ImageDeMenu" src={image2} roundedCircle />
          <p className="SousTitre" >Soupe</p>
        </Col>
      </Row>
    </Container>

    <div className=" LesCartes mt-5">
      <Container>
      <Row>
        <Col direction="horizontal"  xs={12} md={6} lg={4} xl= {3}>
    <Carte titre="Soupe Legume" image={Burger} >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
    </Col>
    <Col direction="horizontal"  xs={12} md={6} lg={4} xl= {3}>
    <Carte titre="Soupe Legume" image={frite}  >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong>Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
    </Col>
    <Col direction="horizontal"   xs={12} md={6} lg={4} xl= {3}>
    <Carte titre="Soupe Legume" image={image2}  >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
    </Col>
    <Col direction="horizontal"   xs={12} md={6} lg={3} xl= {3}>
    <Carte titre="Soupe Legume" image={Burger}  >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
    </Col>
    </Row>
    
    <Stack direction="horizontal" gap={3} >
    <Carte titre="Soupe Legume" image={Burger}  >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong>Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
    <Carte titre="Soupe Legume" image={Burger}  >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong>Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
    <Carte titre="Soupe Legume" image={Burger}  >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong>Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
    <Carte titre="Soupe Legume" image={Burger} >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong>Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
    </Stack>
    <Stack direction="horizontal" gap={3} >
    <Carte titre="Soupe Legume" image={Burger}  >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong>Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
    <Carte titre="Soupe Legume" image={Burger}  >
        <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong>Ar</p>
        <p>Je suis une soupe 0</p>
    </Carte>
      </Stack>
      </Container>
    </div>
    </main>
    
    
    
        </>

) ;
}

export default Home;