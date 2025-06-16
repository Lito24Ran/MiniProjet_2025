import React, { createContext, useContext, useState } from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Panier from '../page/Panier';
import produitContext from '../page/home'


{/*export const varyContext = createContext();*/}


 const Cards = ({item, handleClick}) => {
    const {id, nom, description, prix, img} = item;
    const [article, setarticle] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => {
       (quantity > 1) && setQuantity(quantity - 1)
    };

  return (
   
    <div className='cards_container'>
      <img src="src\image\font.png" alt="font" className='font' />
      
    
      <div className='card'>
      
        <img className="carteimage" src={img} alt="Image" />
        <div className='card_text'> 
              <p className='titre_card' >{nom}</p>
              <p className='description'><b>Ingredient: </b>{description}</p>
              <p className='prix'>Prix : <b style={{color :'green'}}>{prix} Ar</b> </p>
              <div className="quantity-controls">
                <button className='quantity-controls1 ' onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button  className='quantity-controls2 'onClick={increment}>+</button>
                
              </div>
              {/*<varyContext.Provider value={article} className="bouttonA"> */}
                  <button onClick={()=>handleClick({ ...item, quantity})} className='boutton'>Ajouter au panier</button>
              {/*</varyContext.Provider>*/}
        </div>
      </div>
    </div>

  )
}

export default Cards;