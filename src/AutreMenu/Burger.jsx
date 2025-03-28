import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../component/navbar";
import Stack from 'react-bootstrap/Stack';
import Burger from '../image/Burger.png'
import burgerlist from './Databurger.js';
import Cards from "../component/Card.jsx";

function  MenuBurger (){
    const prix = 12000;
   return(
    <>
    <Navbar/>
    <h1 className="nom_categorie">Snack</h1>
        {
            burgerlist.map((item)=>(
                <Cards item={item}/>
            ))
        }
    </>
    );
} 
  

export default MenuBurger;