import React from "react";
import Navbar from "../component/navbar";
import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import list from './Databurger';
import Cartes from "../component/cartes";
import Foot from "../component/footer";

function  MenuBurger (){
    const { cart, setCart, handleClick } = useContext(CartContext); 
    return (
        <>
           <Navbar size={cart.length} /> 
            <section>
                    <img src="src\image\font.png" alt="font" className="fonts" />
                    <div className='menus'>Snack</div> 
                <div className="All_Cards">
                    {
                        list.map((item)=>(
                            <Cartes item={item} 
                                key={item.id} 
                                handleClick={handleClick} />
                            ))
                    }
                </div>
            </section>
            <footer>
                <Foot/>
            </footer>
        </>
    )
} 
  

export default MenuBurger;