import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../component/navbar";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Stack from 'react-bootstrap/Stack';
import Cards from '../component/Card';
import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import list from './Datariz'


function  Riz (){

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

    return (
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
    )
} 
  



export default Riz;
