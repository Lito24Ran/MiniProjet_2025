import { useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import Navbar from '../component/navbar';


function Panier () {
    const { cart, setCart } = useContext(CartContext);
    const [count,setCount] = useState(0)
    let total = 0;
  {
    cart.map((item)=>(
      total += item.prix * item.amount+1
    ))
  }
  function handleclicRemove (index){
    const sup =  cart.filter((item)=> item.id !== index);
    setCart(sup);
  }
  function incrementProduct(inc){
   let c = inc;
   c += 1
   inc = c
   console.log(inc);
  }

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
                        <button > - </button>
                          <p>{item.amount}</p>
                        <button onClick={()=>incrementProduct(item.amount)}> + </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() =>handleclicRemove(item.id)} >Remove</button>
                    </div>
                    
                  </div>
                
               ))}
            <p><b>Le total est :</b>{total} Ariary</p>
    </article>
    
</div>
            </> 
    );         
}

export default Panier;