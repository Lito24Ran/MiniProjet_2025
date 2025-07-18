import React, { useEffect, useState, useContext } from "react";
import Navbar from "../component/navbar";
import Cartes from "../component/cartes";
import Foot from "../component/footer";
import { CartContext } from "../context/CartContext";

function Menu() {
  const { cart, handleClick } = useContext(CartContext);
  const [menuSpecial, setMenuSpecial] = useState([]);

  useEffect(() => {
    const fetchMenuSpecial = () => {
      fetch("http://localhost:1203/produits/menuSpecial")
        .then((res) => res.json())
        .then((data) =>
          setMenuSpecial(data.map((p) => ({
            ...p,
            img: `http://localhost:1203/${p.img}`,
          })))
        )
        .catch((err) => console.error("Erreur fetch menu spécial:", err));
    };
  
    // Appel initial
    fetchMenuSpecial();
  
    // Rafraîchir toutes les 15 secondes
    const intervalId = setInterval(fetchMenuSpecial, 15000);
  
    // Nettoyage de l'intervalle à la fin
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar size={cart.length} />
      <section>
        <img src="src/image/font.png" alt="font" className="fonts" />
        <div className="menus">Menu du jour</div>
        <div className="All_Cards">
          {menuSpecial.map((item) => (
            <Cartes key={item._id} item={item} handleClick={handleClick} />
          ))}
        </div>
      </section>
      <footer>
        <Foot />
      </footer>
    </>
  );
}

export default Menu;