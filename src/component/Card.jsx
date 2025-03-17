import React, { createContext, useState } from 'react';
import './cards.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const varyContext = createContext();


 const Cards = ({item}) => {
    const {nom, description, prix, img} = item;
    const [article, setarticle] = useState([]);
    console.log(item);
    console.log(article);
    
    
    function handleClick(item) {
      setarticle(s =>[...s,item])
    } 

  return (
    
    <> 

    <div className='cards_container'>
    
      <div className='card'>
      
        <img className="carteimage" src={img} alt="Image" />
        <div className='card_text'> 
              <p className='titre' >{nom}</p>
              <p className='description'>{description}</p>
              <p className='prix'>Prix - {prix} Ariary</p>
              <varyContext.Provider value={article}>
                  <button onClick={()=>handleClick({item})} >Commander</button>
              </varyContext.Provider>
        </div>
     
      </div>
      
    </div>
     
    </>
    
  )
}

export default Cards;