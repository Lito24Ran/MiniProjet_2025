import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // 👈 ajoute useNavigate
import { Nav } from "react-bootstrap";
import "./navbar.css";

const CustomNavbar = ({ size, onSearchChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate(); // 👈 Hook pour la navigation

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    // Tu peux ajouter ici des actions comme localStorage.clear() si nécessaire
    navigate("/"); // 👈 Redirige vers la page d’accueil
  };

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <img src="src/image/kalico.png" alt="logo" />
        </div>

        <div className={`main_list ${menuOpen ? "show_list" : ""}`}>
          <ul className="navlinks">
            <li>
              <NavLink to="/home">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu du jour</NavLink>
            </li>
          </ul>

          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher..."
              className="search-input"
              value={searchValue}
              onChange={handleInputChange}
            />
          </div>

          <Nav className="panier">
            <Nav.Link as={Link} to="/panier">
              <img src="src/image/panier.png" alt="panier" />
            </Nav.Link>
            <span>{size}</span>
          </Nav>

          <div className="profile-container" ref={profileRef}>
            <img
              src="src/image/profil.png"
              alt="profil"
              className="profile-img"
              onClick={toggleProfileMenu}
            />
            {showProfileMenu && (
              <div className="profile-dropdown">
                <button onClick={handleLogout}>Se déconnecter</button>
              </div>
            )}
          </div>
        </div>

        <span
          className={`navTrigger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};

export default CustomNavbar;
