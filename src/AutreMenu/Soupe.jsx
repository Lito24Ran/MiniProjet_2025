import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../component/navbar";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import soupelist from './Datasoupe.js'
import Cards from "../component/Card.jsx";


function  Soupe (){
    const prix = 12000;
   return(
    <>
    <Navbar/>
    <h1 className="nom_categorie">Riz</h1>
    {
        soupelist.map((item)=>(
            <Cards item={item} />
        ))
    }
    </>
    );
} 
  



export default Soupe ;