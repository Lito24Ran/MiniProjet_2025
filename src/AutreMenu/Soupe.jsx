import React from "react";
import Navbar from "../component/navbar";
import Cartes from "../component/cartes";
import { createContext, useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import list from './Datasoupe';
import Foot from "../component/footer";

function Soupe () {
    const { cart, setCart,handleClick } = useContext(CartContext);
    return(
        <>        
        <Navbar size={cart.length} /> 
           <section>
                <img src="src\image\font.png" alt="font" className="fonts" />
                <div className='menus'>Pates</div> 
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

    );
}
export default Soupe;