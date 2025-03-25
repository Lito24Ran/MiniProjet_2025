import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../component/navbar";
import Carte from "../component/carte.jsx";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Stack from 'react-bootstrap/Stack';


function  Soupe (){
    const prix = 12000;
   return(
    <>
    <Navbar/>
    <h1 className="nom_categorie">Riz</h1>
    <Stack direction="horizontal" gap={2}>
    
    <Carte titre="Soupe Legume" >
        <p style={{color:"orange"}}><strong>{prix}</strong></p>
        <p>Je suis une soupe 0</p>
    </Carte>
    <Carte titre="Soupe Citron" >
        <p style={{color:"orange"}}><strong>{prix}</strong></p>
        <p>Je suis une soupe 1</p>
    </Carte>
    <Carte titre="Soupe Tongo-tromby">
        <p style={{color:"orange"}}><strong>{prix}</strong></p>
        <p>Je suis une soupe 2</p>
    </Carte>
    </Stack>
    </>
    );
} 
  



export default Soupe ;