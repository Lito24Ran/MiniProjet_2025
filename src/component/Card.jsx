import React, { createContext, useContext, useState } from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Panier from '../page/Panier';
import produitContext from '../page/home'

 const Cards = ({handleClick,item}) => {
    const {nom, description, prix, img} = item;
    const receiveValue = useContext(produitContext)


  return (
    
    <> 
    {
      <ul>
      {Array.isArray(receiveValue) && receiveValue.length > 0 ? (
        produit.map((prod, index) => (
          <li key={index}>{prod.nom} - {prod.prix} Ariary</li>
        ))
      ) : (
        <p>Aucun produit ajouté</p>
      )}
    </ul>
    }

    
    <div className='cards_container'>
    
      <div className='card'>
      
        <img className="carteimage" src={img} alt="Image" />
        <div className='card_text'> 
              <p className='titre' >{nom}</p>
              <p className='description'>{description}</p>
              <p className='prix'>Prix - {prix} Ariary</p>
              <button onClick={()=>handleClick(item)} >Commander</button>
              
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Cards;