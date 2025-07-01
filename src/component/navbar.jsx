import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

// function customerNavbar({size}) {
//   const { cart } = useContext(CartContext);
//   const navigate = useNavigate();
//   const handleClic = (path) => {
//     navigate(path);
//   };

//     const color  = "gray";
//     return(
//         <>
//           <Navbar style={{color}} className="Barre_Menu">

//          <Container>

//            <Navbar.Brand  as={Link} to="/"><img
//            src="src\image\ikaly.png"
//            alt="logo"
//            width="30"
//            height="30"
//            className="logonav"
//            />
//            </Navbar.Brand>

//                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
//            <Navbar.Collapse id="basic-navbar-nav">
//             <div className="nav_item">
//             <p className="Navbar_text" onClick={() => handleClic("/Menu")}>Menu</p>
//             </div>
//             <Nav className="ms-auto">
//               <Nav.Link as={Link} to="/panier"><img
//               src="src\image\panier.png"
//               alt="panier"
//               width="30"
//               height="30"
//               className="panier"
//               />
//               </Nav.Link>
//               <span className="span" >{size}</span>
//             </Nav>
//            </Navbar.Collapse>
//          </Container>
//         </Navbar>
//         </>

//     )
// }

const customerNavbar = ({ size }) => {
  return (
    <div className="Barre_Menu">
      <nav className="navbar2">
        <div className="logo2">
          <img src="src/image/kalico.png" alt="tsy hita" height="125px" />
        </div>
        <ul className="nav-links">
          <li>
            <NavLink as={Link} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              as={Link}
              to="/Menu"
              // className={({ isActive }) => (isActive ? "active" : "")}
            >
              Menu
            </NavLink>
          </li>
        </ul>
        <Nav className="nav-actions">
          <Nav.Link as={Link} to="/panier">
            <img
              src="src\image\panier.png"
              alt="panier"
              width="30"
              height="30"
              className="panier"
            />
          </Nav.Link>
          <span className="span">{size}</span>
        </Nav>
        <Nav className="connect">
          <Nav.Link className="textconnect" as={Link} to="/">
            se connecter
            {/* <img
              src="src\image\profil.png"
              alt="profil"
              width="30"
              height="30"
              className="profil"
            /> */}
          </Nav.Link>
        </Nav>
      </nav>
    </div>
  );
};

export default customerNavbar;
