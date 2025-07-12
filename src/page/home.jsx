import React, { createContext, useState, useEffect, useContext } from "react";
import Navbar from "../component/navbar.jsx";
import frite from "../image/frite.png";
import image2 from "../image/image2.png";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Burger from "../image/burger.png";
import { useNavigate } from "react-router-dom";
import SystemeCrousel from "../component/Carousel.jsx";
import Footer from "../component/footer.jsx";
import Cards from "../component/Card";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export const produitContext = createContext();

function Home() {
  const navigate = useNavigate();
  const { cart, setCart, handleClick } = useContext(CartContext);

  const [produits, setProduits] = useState([]);

  // 🟢 Fonction de récupération avec tri décroissant
  const fetchProduits = () => {
    fetch("http://localhost:1203/produits")
      .then((res) => res.json())
      .then((data) => {
        const produitsAvecImageUrl = data
          .map((p) => ({
            ...p,
            img: `http://localhost:1203/${p.img}`,
          }))
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // triage decroissant
        setProduits(produitsAvecImageUrl);
      })
      .catch((err) => console.error("Erreur de chargement des produits :", err));
  };

  useEffect(() => {
    fetchProduits();

    // ici on Rafraîchir les produit tout les 10 secondes
    const intervalId = setInterval(fetchProduits, 8000);

    return () => clearInterval(intervalId); // Nettoyage
  }, []);

  const handleClic = (path) => {
    navigate(path);
  };

  //Ici on fetch l' api pour les donnes d' un client connecter

  useEffect(() => {
    async () => {
      const donneClient = await fetch("http://localhost:1203/aboutClient",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      )
      .then(data =>{
        console.log("Donne utilisateur :", data);
        
      }

      )
      donneClient;
    }
    
  }, [])

  const prix = 12000;

  return (
    <>
      <Navbar size={cart.length} />
      <header>
        <div className="carousel">
          <SystemeCrousel />
        </div>
      </header>

      <section className="mt-4">
        <div className="BarreDemenu">
          <Container>
            <Row>
              <div className="texte">
                <p className="text">Explorer notre menu</p>
                <p className="texts">
                  Choisissez parmi notre menu varié, composé d'une sélection de
                  plats savoureux. Notre mission est de satisfaire vos envies et
                  d'élever votre expérience culinaire.
                </p>
              </div>
              <div className="contenairMenu">
                <div className="menu">
                  <Image
                    className="imagemenu"
                    src="src/image/pates.png"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "src/image/pates1.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "src/image/pates.png")
                    }
                    onClick={() => handleClic("/Soupe")}
                    roundedCircle
                  />
                  <span className="SousTitre">Pâtes</span>
                </div>

                <div className="menu">
                  <Image
                    className="imagemenu"
                    src="src/image/snack.png"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "src/image/snack1.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "src/image/snack.png")
                    }
                    onClick={() => handleClic("/Burger")}
                    roundedCircle
                  />
                  <span className="SousTitre">Snack</span>
                </div>

                <div className="menu">
                  <Image
                    className="imagemenu"
                    src="src/image/riz.png"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "src/image/riz1.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "src/image/riz.png")
                    }
                    onClick={() => handleClic("/Riz")}
                    roundedCircle
                  />
                  <span className="SousTitre">Riz</span>
                </div>

                <div className="menu">
                  <Image
                    className="imagemenu"
                    src="src/image/dessert.png"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "src/image/dessert1.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "src/image/dessert.png")
                    }
                    onClick={() => handleClic("/Dessert")}
                    roundedCircle
                  />
                  <span className="SousTitre">Dessert</span>
                </div>

                <div className="menu">
                  <Image
                    className="imagemenu"
                    src="src/image/boisson.png"
                    onMouseOver={(e) =>
                      (e.currentTarget.src = "src/image/boisson1.png")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "src/image/boisson.png")
                    }
                    onClick={() => handleClic("/Jus")}
                    roundedCircle
                  />
                  <span className="SousTitre">Boisson</span>
                </div>
              </div>
            </Row>
            <hr />
          </Container>
        </div>
      </section>

      <div className="All_Cards">
        {produits.map((item) => (
          <Cards handleClick={handleClick} item={item} key={item._id} />
        ))}
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;