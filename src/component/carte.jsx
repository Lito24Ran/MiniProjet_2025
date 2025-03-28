import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Row  from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Col  from "react-bootstrap/Col";
import "./Carte.css";

const increment = () => setQuantity(quantity + 1);
const decrement = () => {
  if (quantity > 1) setQuantity(quantity - 1)
};

 function Carte(props)  {
    return(
    <div className="cards_container">
      <div className="All_cards">
        <Row>
        <Col xs = {1} md= {4} lg= {2}>
        
        
       <Card  className="card">
            <Card.Img className="carteimage" variant="top"  src={props.image}/> 
            <Card.Body>
             <Card.Title className="titre_card">{props.titre}</Card.Title>
             <Card.Text className="description">{props.texte}</Card.Text>
             <Card.Text className="prix">{props.prix}</Card.Text>
             <Button className="boutton">ajouter au panier</Button>
             <button onClick={decrement}>-</button>
             <span>{quantity}</span>
             <button onClick={increment}>+</button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    </div>
    </div>
    );
}

export default Carte;