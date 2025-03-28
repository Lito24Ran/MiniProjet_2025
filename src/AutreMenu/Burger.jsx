import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../component/navbar";
import Carte from "../component/carte.jsx";
import Stack from 'react-bootstrap/Stack';
import Burger from '../image/Burger.png'

function  MenuBurger (){
    var prix ;
   return(
    <>
    <Navbar/>
    <h1 className="nom_categorie">Snack</h1>
    <Stack direction="horizontal" gap={2}>
    
    <Carte titre="Soupe Legume" image= {Burger} 
        texte="Je suis une soupe 0"
        prix="3000Ar"  >
    </Carte>
    <Carte titre="Soupe Citron" image= {Burger} 
        texte="Je suis une soupe 1"
        prix="3000Ar"  >
    </Carte>
    <Carte titre=" Tongo-tromby"image= {Burger} 
        texte="Je suis une soupe 2"
        prix="3000Ar"  >
    </Carte>
    </Stack>
    </>
    );
} 
  

export default MenuBurger;