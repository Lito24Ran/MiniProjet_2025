import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Navbar from "../component/navbar";
import Cartes from "../component/cartes";
import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import list from './DataDessert'

function  Dessert (){

    const { cart, setCart,handleClick } = useContext(CartContext);

    return(
        <>        
        <Navbar size={cart.length} /> 
           <section>
           <img src="src\image\font.png" alt="font" className="fonts" />
           <div className='menus'>Dessert</div> 
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
export default Dessert;