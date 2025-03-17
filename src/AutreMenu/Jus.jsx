import React from "react";
import Carte from "../component/carte.jsx";
import Navbar from "../component/navbar";


function Jus () {
    const prix = 2000
    return(
        <>        
        <Navbar/>
        <Carte titre="jus naturel">
        <p style={{color:"orange"}}><strong>{prix}</strong></p>
        <p>Je suis un jus</p>
    </Carte>
        </>

    );
}
export default Jus;