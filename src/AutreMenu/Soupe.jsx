import React, { useEffect, useState, useContext } from "react";
import Navbar from "../component/navbar";
import { CartContext } from "../context/CartContext";
import Cartes from "../component/cartes";
import Foot from "../component/footer";

function Soupe() {
  const { cart, handleClick } = useContext(CartContext);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchSoupe = () => {
    fetch("http://localhost:1203/produits/categorie/soupe")
      .then((res) => res.json())
      .then((data) =>
        setProduits(data.map((p) => ({ ...p, img: `http://localhost:1203/${p.img}` })))
      )
      .catch((err) => console.error("Erreur chargement Soupe :", err));
    };

    fetchSoupe();
    const intervalId = setInterval(fetchSoupe, 15000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar size={cart.length} />
      <section>
        <img src="src/image/font.png" alt="font" className="fonts" />
        <div className="menus">Pâtes</div>
        <div className="All_Cards">
          {produits.map((item) => (
            <Cartes key={item._id} item={item} handleClick={handleClick} />
          ))}
        </div>
      </section>
      <footer><Foot /></footer>
    </>
  );
}

export default Soupe;