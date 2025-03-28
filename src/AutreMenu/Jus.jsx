import React from "react";
import Carte from "../component/carte.jsx";
import Navbar from "../component/navbar";


function Jus () {
    const prix = 2000
    return(
        <>        
        <Navbar/>
        <h1 className="nom_categorie">Pates</h1>
        <Carte titre="jus naturel">
        <p style={{color:"orange"}}><strong>{prix}</strong></p>
        <p>Je suis un jus</p>
    </Carte>
        </>

    );
}
export default Jus;