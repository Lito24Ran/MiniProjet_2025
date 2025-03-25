import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./navbar.css";

function customerNavbar({size}) {
  const { cart } = useContext(CartContext);
  
    const color  = "gray";
    return(
        <>
          <Navbar style={{color}} className="Barre_Menu">
         <Container>
           <Navbar.Brand  as={Link} to="/"><img
           src="src\image\ikaly.png"
           alt="logo"
           width="30"
           height="30"
           className="logonav"
           />
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
            <p className="Navbar_text">Menu</p>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/panier"><img
              src="src\image\panier.png"
              alt="panier"
              width="30"
              height="30"
              className="panier"
              />
              </Nav.Link>
              <span className="span" >{size}</span>
            </Nav>
           </Navbar.Collapse>
         </Container>
        </Navbar>
        </>

    )
}

export default customerNavbar;