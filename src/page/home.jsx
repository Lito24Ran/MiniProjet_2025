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
<<<<<<< HEAD
    setCount (count-1);
=======
    if (count>0){
    setCount (count-1);
  }
>>>>>>> c723f1b... commit lavareny
  }

  const prix = 12000;

    return(
        <>       
         <Navbar/>
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
        
        <Container  className="BarreDeMenu" >
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
    <div >
      <Container>
      <Row>
        <Col className="carte" direction="horizontal"  xs={12} md={4} lg={2} xl= {3}>
        <Carte>
            
            <img src={Burger} alt="burger" className="carteimage" />
            <h1 className="titre">Soupe Legume</h1>
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
        </Col>
        <Col className="carte" direction="horizontal"  xs={12} md={4} lg={2} xl= {3}>
        <Carte> <img src={frite} alt="burger" className="carteimage" /><h1 className="titre">Soupe Legume</h1>
        
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong>Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
        </Col>
        <Col className="carte" direction="horizontal"   xs={12} md={4} lg={2} xl= {3}>
        <Carte > <img src={image2} alt="burger" className="carteimage" />
        <h1 className="titre">Soupe Legume</h1>
       
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
        </Col>
        <Col className="carte" direction="horizontal"   xs={12} md={4} lg={2} xl= {3}>
        <Carte> <img src={Burger} alt="burger" className="carteimage" /> 
          <h1 className="titre">Soupe Legume</h1>
          
          <div className="Boutton"> 
            <button 
              type="boutton"
              onClick={BouttonDecrmentation}
            ><img src={SigneMoin} alt="SigneMoin" /></button> 
            <p className="Chiffre">{count}</p>
            <button 
              type="boutton"
              onClick={Bouttonincrmente}
            ><img src={SignePlus} alt="SignePlus" /></button>
         
       
          </div>
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
    </Col>
    </Row>
    
    <Row>
        <Col direction="horizontal"  xs={12}  lg={6} xl= {3} >
        <Carte titre="Soupe Legume" image={Burger} >
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
        </Col>
        <Col direction="horizontal"  xs={12}  lg={6} xl= {3}>
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
        <Col direction="horizontal"   xs={12}  lg={6} xl= {3}>
        <Carte titre="Soupe Legume" image={Burger}  >
          <div className="Boutton"> 
            <button 
              type="boutton"
              onClick={BouttonDecrmentation}
              className="btn"
            >-</button> 
            <p className="Chiffre">{count}</p>
            <button 
              type="boutton"
              onClick={Bouttonincrmente}
            >+</button>
         
       
          </div>
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
    </Col>
    </Row>
    <Row>
        <Col direction="horizontal"  xs={12} md={4} lg={4} xl= {3}>
        <Carte titre="Soupe Legume" image={Burger} >
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
        </Col>
        <Col direction="horizontal"  xs={12} md={4} lg={4} xl= {3}>
        <Carte titre="Soupe Legume" image={frite}  >
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong>Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
        </Col>
        <Col direction="horizontal"   xs={12} md={4} lg={4} xl= {3}>
        <Carte titre="Soupe Legume" image={image2}  >
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
        </Col>
        <Col direction="horizontal"   xs={12} md={4} lg={4} xl= {3}>
        <Carte titre="Soupe Legume" image={Burger}  >
          <div className="Boutton"> 
            <button 
              type="boutton"
              onClick={BouttonDecrmentation}
            ><img src={SigneMoin} alt="SigneMoin" /></button> 
            <p className="Chiffre">{count}</p>
            <button 
              type="boutton"
              onClick={Bouttonincrmente}
            ><img src={SignePlus} alt="SignePlus" /></button>
         
       
          </div>
            <p  style={{color:"orange"}}><span style={{color:"black"}}>Prix : </span><strong>{prix}</strong> Ar</p>
            <p>Je suis une soupe 0</p>
        </Carte>
    </Col>
    </Row>
      
    </Container>
    </div>
    </section>
    <footer>
      <Footer/>
    </footer>
    
   
        
        </>
) ;
}

export default Home;