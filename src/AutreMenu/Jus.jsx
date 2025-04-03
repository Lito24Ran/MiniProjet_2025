import React from "react";
import Navbar from "../component/navbar";
import Cards from '../component/Card';
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
        {
            list.map((item)=>(
                <Cartes item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
        </>

    );
}
export default Jus;