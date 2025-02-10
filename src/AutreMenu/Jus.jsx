import React from "react";
import Carte from "../component/carte.jsx";
import Navbar from "../component/navbar";


function Jus () {
    const prix = 2000
    return(
        <>        
        <Navbar/>
       <Carte Titre="Jus Naturel" >
             <p style={{color:"orange"}}><strong>{prix}</strong></p>
             <p>Je suis un Jus</p>
        </Carte>
        </>

    );
}
export default Jus;