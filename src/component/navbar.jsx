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
             <Nav className="ms-auto">
<<<<<<< HEAD
               <Nav.Link  className=" Navbar_text text-center me-5">Home</Nav.Link>
               <Nav.Link href="#link">Lien</Nav.Link>
=======
               <Nav.Link href="#link">
                <img
                src="src\image\panier.png"
                alt="panier"
                width="30"
                height="30"
                className="panier"
                />
               </Nav.Link>
>>>>>>> d32a42e... nanamboatra design VICMORT
             </Nav>
           </Navbar.Collapse>
         </Container>
        </Navbar>
        </>

    )
}

export default customerNavbar;