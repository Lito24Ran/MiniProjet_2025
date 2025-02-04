import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../component/navbar";
import Carte from "../component/carte.jsx";
import Stack from 'react-bootstrap/Stack';
import Burger from '../image/Burger.png'

function  MenuBurger (){
    const prix = 12000;
   return(
    <>
    <Navbar/>
    <Stack direction="horizontal" gap={2}>
    
    <Carte titre="Soupe Legume" image= {Burger} >
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
  

export default MenuBurger;