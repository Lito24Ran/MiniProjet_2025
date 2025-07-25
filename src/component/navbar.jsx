import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./navbar.css";

const CustomNavbar = ({ size, onSearchChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value); // Envoier en direct la recherche au parent
  };

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <img src="src/image/kalico.png" alt="logo" />
        </div>

        <div className={`main_list ${menuOpen ? "show_list" : ""}`}>
          <ul className="navlinks">
            <li><NavLink to="/home">Accueil</NavLink></li>
            <li><NavLink to="/menu">Menu du jour</NavLink></li>
          </ul>

          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher..."
              className="search-input"
              value={searchValue}
              onChange={handleInputChange} // appel à chaque frappe de recherche
            />
          </div>

          <Nav className="panier">
            <Nav.Link as={Link} to="/panier">
              <img src="src/image/panier.png" alt="panier" />
            </Nav.Link>
            <span>{size}</span>
          </Nav>

          <Nav className="profile">
            <img src="src/image/profil.png" alt="profil" />
          </Nav>
        </div>

        <span className={`navTrigger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <i></i><i></i><i></i>
        </span>
      </div>
    </nav>
  );
};

export default CustomNavbar;