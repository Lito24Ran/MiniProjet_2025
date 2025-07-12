import React, { useEffect, useState, useContext } from "react";
import Navbar from "../component/navbar";
import { CartContext } from "../context/CartContext";
import Cartes from "../component/cartes";
import Foot from "../component/footer";

function Jus() {
  const { cart, handleClick } = useContext(CartContext);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1203/produits/categorie/jus")
      .then((res) => res.json())
      .then((data) =>
        setProduits(data.map((p) => ({ ...p, img: `http://localhost:1203/${p.img}` })))
      )
      .catch((err) => console.error("Erreur chargement Jus :", err));
  }, []);

  return (
    <>
      <Navbar size={cart.length} />
      <section>
        <img src="src/image/font.png" alt="font" className="fonts" />
        <div className="menus">Boisson</div>
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

export default Jus;