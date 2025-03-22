import Navbar from '../component/navbar';
import { useContext, useEffect, useState } from 'react';
import produitContext from '../component/context';


function Panier () {

    const {produit} = useContext(produitContext);

      console.log(produit);
    

    return ( <>
                <Navbar /> 
                <div>
                  {
                    produit.map((item)=>{
                      <div className='Cart_box'>
                        <div className='Carte_image'>
                          {item.img }
                          <p>{item.title}</p>
                        </div>
                        <div>
                          <button> +</button> 
                           <button>-</button>
                        </div>
                      </div>
                    })
                  }
                </div>
                
            </> 
    );
}
                
export default Panier;