import { useContext} from "react";
import { CartContext } from "../context/CartContext";
import Navbar from '../component/navbar';
import './panier.css'


function Panier () {
    const { cart, setCart } = useContext(CartContext);

    const increase = (id) => {
        setCart(cart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity +1} : item
            ));
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
                        <img src={item.img} />
                        <p>{item.nom}</p>
                    </div>
                    <div>
                        <button onClick={() => decrease(item.id)}> - </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increase(item.id)}> + </button>
                    </div>
                    <div>
                        <span>{item.prix * item.quantity} Ariary</span>
                        <button onClick={() => removeItem(item.id)}>supprimer</button>
                    </div>
                </div>
            ))}
    </article>
    <div>
        <h1>Total du commande : {total} Ariary</h1>
    </div>
            </div>
            </> 
    );         
}

export default Panier;