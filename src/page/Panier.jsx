import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import Navbar from '../component/navbar';
import './panier.css';
import Modal from "../component/modal";
import { createPortal } from "react-dom";

//export const MOdalContext =createContext();

function Panier () {
    const { cart, setCart } = useContext(CartContext);
    const [show,setshow] = useState(false);

    const increase = (id) => {
        setCart(cart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity +1} : item
            ));
    }

    const ConditionalFunc =() => {
        if (cart.length !== 0) {
            alert('Votre commande est enregistrer veuillez patientez !');
            setshow(false);
        }
        else alert ('veulliez entrez des produits!');
        setshow(false);
    }

    const decrease = (id) => {
        setCart(cart.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity -1} : item
            ));
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !==id));
    }

    let total = 0;
    for (let i =0; i<cart.length; i++) {
       total = total + (cart[i].prix * cart[i].quantity)
    }

    return ( <>
                <Navbar size={cart.length} /> 
            <div className="panier_container"> 
                <h1>Votre panier {cart.length === 0 ? "est vide" : "contient des articles"}.</h1>
                <article>
        {cart.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img}  className="pan_image"/>
                        <p className="name">{item.nom}</p>
                    </div>
                    <div >
                        <button className="bouttons" onClick={() => decrease(item.id)}> - </button>
                        <span className="quantity" >{item.quantity}</span>
                        <button className="bouttons" onClick={() => increase(item.id)}> + </button>
                    </div>
                    <div>
                        <span className="prix_pan">{item.prix * item.quantity} Ar</span>
                        <img src="src\image\remove.png" alt="supp" className="remove" onClick={() => removeItem(item.id)}/> 
                    </div>
                    
                  </div>
                
               ))}
            <p><b>Le total est :</b>{total} Ariary</p>
    </article>
    <div>
        <h1>Total du commande : {total} Ariary</h1>
        <button style={{color : 'white' , backgroundColor: 'green', borderRadius : '20px', width : '200px'}} onClick={() =>setshow(true)}> Confirmer</button>
        
          {
           show && createPortal(
           <Modal oneclose = {() => setshow(false)} condition = {()=>ConditionalFunc()}  />, 
           document.body
        )}
        {/*<MOdalContext.Provider value={show}>
        </MOdalContext.Provider>*/}
    </div>
  </div>
            
            </> 
    );         
}

export default Panier;