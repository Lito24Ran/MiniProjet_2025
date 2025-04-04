import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../component/navbar";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Stack from 'react-bootstrap/Stack';
import Cartes from "../component/cartes";
import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import list from './Datariz';
import Foot from "../component/footer";


function  Riz (){

    const { cart, setCart, handleClick } = useContext(CartContext);

    return (
        <>
            <Navbar size={cart.length} />
            <section>
                <img src="src\image\font.png" alt="font" className="fonts" />
                <div className='menus'>Riz</div> 
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
  



export default Riz;
