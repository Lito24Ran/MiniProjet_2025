import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Row  from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Col  from "react-bootstrap/Col";
import "./Carte.css";


 function Carte(props)  {
    return(
    <div className="mt-4 ms-3 inline-bloc">
        <Row>
        <Col xs = {1} md= {4} lg= {2}>
       <Card style={{ width: '18rem' }}>
            <Card.Img className="Image_Carte" variant="top"  src={props.image}/> 
            <Card.Body>
             <Card.Title>{props.titre}</Card.Title>
             <Card.Text>
               {props.children}
             </Card.Text>
             <Button variant="primary">Confirme</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    </div>
    );
}

export default Carte;