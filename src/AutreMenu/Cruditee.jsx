import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../component/navbar.jsx";
import Stack from 'react-bootstrap/Stack';
import snacklist from './Datasnack.js'
import Cards from "../component/Card.jsx";


function  CarteCrudite (){
    const prix = 12000;
   return(
    <>
    <Navbar/>
    <h1 className="nom_categorie">Dessert</h1>
        {
            snacklist.map((item)=>(
                <Cards item={item}/>
            ))
        }
    </>
    );
} 
export default CarteCrudite;