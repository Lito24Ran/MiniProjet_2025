import { useContext} from "react";
import { CartContext } from "../context/CartContext";
import Navbar from '../component/navbar';
import './panier.css'


function Panier () {
    const { cart } = useContext(CartContext);

    return ( <>
                <Navbar size={cart.length} /> 
            <div className="panier_container"> 
                <h1>Votre panier {cart.length === 0 ? "est vide" : "contient des articles"}.</h1>
                <article>
        {
            cart.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt={item.title} className="pan_image"/>
                        <h3 className="name">{item.nom}</h3>
                    </div>
                    <div className="quantite">
                        <button> - </button>
                        <button>{item.amount}</button>
                        <button> + </button>
                    </div>
                    <div>
                        <span className="prix_pan">{item.prix}Ar</span>
                        <img src="src\image\remove.png" alt="remove" className="remove" />
                    </div>
                </div>
            ))}
    </article>
            </div>
            </> 
    );         
}

export default Panier;