import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function customerNavbar() {
    const color  = "gray";
    return(
        <>
           <Navbar className="Barre_Menu">
         <Container>
           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ms-auto">
               <Nav.Link href="#home" className="me-5">Home</Nav.Link>
               <Nav.Link href="#link">Lien</Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Container>
        </Navbar>
        </>

    )
}

export default customerNavbar;