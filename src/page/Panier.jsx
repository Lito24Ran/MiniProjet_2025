import { useContext} from "react";
import { CartContext } from "../context/CartContext";
import Navbar from '../component/navbar';


function Panier () {
    const { cart } = useContext(CartContext);

    return ( <>
                <Navbar size={cart.length} /> 
            <div>
                <h1>Votre panier {cart.length === 0 ? "est vide" : "contient des articles"}.</h1>
                <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button> - </button>
                        <button>{item.amount}</button>
                        <button> + </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button>Remove</button>
                    </div>
                </div>
            ))}
    </article>
            </div>
            </> 
    );         
}

export default Panier;