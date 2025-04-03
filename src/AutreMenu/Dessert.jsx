import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Navbar from "../component/navbar";
import Cards from '../component/Card';
import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import list from './DataDessert'

function  Dessert (){

    const { cart, setCart,handleClick } = useContext(CartContext);

    return(
        <>        
        <Navbar size={cart.length} /> 
           <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
        </>

    );
} 
export default Dessert;