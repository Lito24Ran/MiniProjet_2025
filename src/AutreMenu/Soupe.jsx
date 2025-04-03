import React from "react";
import Navbar from "../component/navbar";
import Cartes from "../component/cartes";
import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import list from './Datasoupe'

function Soupe () {
    const { cart, setCart } = useContext(CartContext); 

    const handleClick = (item) => {
        // handleClick doit gerer le quantite alefa any am panier
        const existItem = cart.find(produit => produit.id === item.id);
    
        if(existItem) {
          // atao Maj le quantite raha efa misy
          setCart(cart.map(produit =>
              produit.id === item.id ? { ...produit, quantity: produit.quantity + item.quantity} : produit
            ));
        } else {
          setCart([...cart, item]);
        }
        console.log(item);
    };

    return(
        <>        
        <Navbar size={cart.length} /> 
           <section>
           <img src="src\image\font.png" alt="font" className="fonts" />
           <div className='menus'>Pates</div> 
           <div className="All_Cards">
        {
            list.map((item)=>(
                <Cartes item={item} key={item.id} handleClick={handleClick} />
            ))
        }
        </div>
    </section>
        </>

    );
}
export default Soupe;