import React, { createContext, useState } from 'react';
import './cards.css';

export const varyContext = createContext();


const Cards = ({item}) => {
    const {nom, description, prix, img} = item;
    const [article, setarticle] = useState([]);
    function handleClick() {
      setarticle(s =>[...s,item])
    } 

  return (
    <div className="cards">
        <div className="image_box">
            <img className="carteimage" src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{nom}</p>
            <p>{description}</p>
            <p>Prix - {prix} Ariary</p>
              <varyContext.Provider value={article}>
                <button onClick={()=>handleClick(item)} >Commander</button>
              </varyContext.Provider>
        </div>
    </div>
  )
}

export default Cards;