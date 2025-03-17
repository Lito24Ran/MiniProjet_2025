import Navbar from '../component/navbar';
import varyContext from '../component/Card';
import { useContext } from 'react';


function Panier () {

    const varyHG = useContext(varyContext);
   

        if (!Array.isArray(varyHG)){
         
    return ( <>
                <Navbar /> 
                <div>
                    <h1>Votre panier il est vide hein?</h1>
                    <p>{varyHG}</p>
                 
                </div>
            </> 
    );
}
                
}

export default Panier;