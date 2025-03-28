import React from "react";
import Navbar from "../component/navbar";
import boissonlist from './Databoisson.js';
import Cards from "../component/Card.jsx";
function Jus () {
    const prix = 2000
    return(
        <>        
        <Navbar/> 
        <h1 className="nom_categorie">Pates</h1>
        <div className="Container_cards">
        {
            boissonlist.map((item)=>(
               <Cards item={item} key={item.id}/>
            ))
        }
       </div>
        
        </>

    );
}
export default Jus;