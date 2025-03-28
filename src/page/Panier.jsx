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
    </article>
    <div>
        <h1 className="total">Total : {total} Ariary</h1>
    </div>
            </div>
            </> 
    );         
}

export default Panier;