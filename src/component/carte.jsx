import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Row  from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Col  from "react-bootstrap/Col";
import "./Carte.css";


 function Carte(props)  {
    return(
    <div className="mt-5 ms-1 inline-bloc">
        <Row>
        <Col xs = {1} md= {4} lg= {2}>
       <Card className="body_card" style={{ width: '18rem' }}>
            <Card.Img className="Image_Carte" variant="top"  src={props.image}/> 
            <Card.Body>
             <Card.Title className="Titre">{props.titre}</Card.Title>
             <Card.Text>
               {props.children}
             </Card.Text>
             <Button className="boutton" variant="primary">Comander</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    </div>
    );
}

export default Carte;