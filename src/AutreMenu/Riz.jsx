import React from "react";
import  Row  from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carte from "../component/carte.jsx";
import  Col  from "react-bootstrap/Col";
import Navbar from "../component/navbar";


function Riz() {
    const prix = 12000;
    return(
        <>
        <Navbar/>
        <Row>
            <Col xs = {12} md = {4} lg = {3} >
        <Carte Titre="Riz contonais" >
             <p style={{color:"orange"}}><strong>{prix}</strong></p>
             <p>Je suis une soupe 0</p>
        </Carte>
        </Col>
        <Col>
        <Carte Titre="Riz contonais">
             <p style={{color:"orange"}}><strong>{prix}</strong></p>
             <p>Je suis une soupe 0</p>
        </Carte>
            </Col>
        </Row>
        </>
    );
}

export default Riz;