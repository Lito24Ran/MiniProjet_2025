import React from "react";
import  Row  from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Col  from "react-bootstrap/Col";
import Navbar from "../component/navbar";
import rizlist from './Datariz.js'
import Cards from "../component/Card.jsx";

function Riz() {
    const prix = 12000;
    return(
        <>
        <Navbar/>
        <h1 className="nom_categorie">Boisson</h1>
        <Row>
            <Col lg={6} xs={12} >
        {
            rizlist.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
        }
            </Col>
        </Row>
       </>
    )
}

export default Riz;