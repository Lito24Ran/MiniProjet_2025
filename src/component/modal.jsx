import React, { useContext } from "react";
import './modal.css';

function Modal({oneclose , condition}) { 
   
    //const Supression = useContext(MOdalContext);    
    return (
    <>
   
     <div className="Container_MOdal">
        <div >
            
            <div className="input_MOdal">
                <b>Payement</b>
                <p>nom </p><input type="text" placeholder="Entrez votre nom" /> <br />
                <h1></h1>
                <img src="src\image\cart.png" alt="card" /><p><input type="text" placeholder="numero de carte" /></p><br />
                    <p style={{textAlign:'center'}}>ou</p>
                <img src="src\image\mvola.png" alt="mvola" /><p><input type="text" placeholder="numero telephone" /></p><br />
                <button onClick={condition} className="btn_conf">Confirmer</button>
                <button onClick={oneclose} className="btn_sup">Anuler</button>
            </div>
            
        </div>
     </div>
    </>
)
}

export default Modal;