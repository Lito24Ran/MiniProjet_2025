import React from "react";
import Navbar from "../component/navbar";
import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import list from './Databoisson'
import Cartes from "../component/cartes";

function Jus () {
    const { cart, setCart, handleClick} = useContext(CartContext);

    return(
        <>        
        <Navbar size={cart.length} /> 
           <section>
           <img src="src\image\font.png" alt="font" className="fonts" />
           <div className='menus'>Boisson</div> 
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
export default Jus;