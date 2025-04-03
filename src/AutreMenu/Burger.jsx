import React from "react";
import Navbar from "../component/navbar";
import Stack from 'react-bootstrap/Stack';
import Burger from '../image/Burger.png';
import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import list from './Databurger';
import Cartes from "../component/cartes";

function  MenuBurger (){
    const { cart, setCart, handleClick } = useContext(CartContext); 
    return (
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
    )
} 
  

export default MenuBurger;