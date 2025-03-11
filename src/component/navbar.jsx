import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "./navbar.css";

function customerNavbar() {
  
    const color  = "gray";
    return(
        <>
          <Navbar className="Barre_Menu">
         <Container>
           <Navbar.Brand as={Link} to="/"><img
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
              <Nav.Link as={Link} to="/panier">
                Panier
              </Nav.Link>
            </Nav>
           </Navbar.Collapse>
         </Container>
        </Navbar>
        </>

    )
}

export default customerNavbar;