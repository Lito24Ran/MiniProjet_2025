import React, { createContext, useState } from 'react';
import './cards.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


{/*export const varyContext = createContext();*/}


 const Cards = ({item, handleClick}) => {
    const {nom, description, prix, img} = item;
    const [article, setarticle] = useState([]);

  return (
    
    <div className='cards_container'>
      <img src="src\image\font.png" alt="font" className='font' />
      
    
      <div className='card'>
      
        <img className="carteimage" src={img} alt="Image" />
        <div className='card_text'> 
              <p className='titre_card' >{nom}</p>
              <p className='description'>{description}</p>
              <p className='prix'>{prix} Ar</p>
              {/*<varyContext.Provider value={article} className="bouttonA"> */}
                  <button onClick={()=>handleClick(item)} className='boutton'>Ajouter au panier</button>
              {/*</varyContext.Provider>*/}
        </div>
     
      </div>
      
    </div>
    
  )
}

export default Cards;