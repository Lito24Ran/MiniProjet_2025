import { useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CommandeDetailModal from "./CommandeDetailModal"; // on importe le modal qu'on va aficher
import "./dropdown.css";

export default function SimpleDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedCommande, setSelectedCommande] = useState(null); // commande selectionnée
  const wrapperRef = useRef(null);
  const { orderHistory } = useContext(CartContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCommandeClick = (commande) => {
    setSelectedCommande(commande);
  };

  const closeModal = () => {
    setSelectedCommande(null);
  };

  return (
    <div className="dropdown-wrapper" ref={wrapperRef}>
      <button className="dropdown-button" onClick={() => setOpen((prev) => !prev)}>
        Vos commandes
      </button>

      <ul className={`value-list ${open ? "open" : ""}`}>
        {orderHistory.map((commande, index) => (
          <li key={index} onClick={() => handleCommandeClick(commande)}>
            Commande #{orderHistory.length - index}
          </li>
        ))}
      </ul>

      {selectedCommande && (
        <CommandeDetailModal commande={selectedCommande} onClose={closeModal} />
      )}
    </div>
  );
}