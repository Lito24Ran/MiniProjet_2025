import { useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CommandeDetailModal from "./CommandeDetailModal";
import "./dropdown.css";

export default function SimpleDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedCommande, setSelectedCommande] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // état de chargement
  const wrapperRef = useRef(null);
  const { orderHistory, setOrderHistory } = useContext(CartContext);

  const fetchCommandes = () => {
    setIsLoading(true);
    setTimeout(() => {
      fetch("http://localhost:1203/commandes")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setOrderHistory(data);
          }
        })
        .catch((err) =>
          console.error("Erreur récupération commandes :", err)
        )
        .finally(() => {
          setIsLoading(false);
          setOpen(true);
        });
    }, 5000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleDropdown = () => {
    if (!open) {
      fetchCommandes(); // lancer fetch avec délai 5000ms si il est fermé
    } else {
      setOpen(false); // fermer normalement
    }
  };

  const handleCommandeClick = (commande) => {
    setSelectedCommande(commande);
  };

  const closeModal = () => {
    setSelectedCommande(null);
  };

  return (
    <div className="dropdown-wrapper" ref={wrapperRef}>
      <button className="dropdown-button" onClick={handleToggleDropdown}>
        Vos commandes
      </button>

      {isLoading && <p className="loading">Chargement des commandes...</p>}

      <ul className={`value-list ${open ? "open" : ""}`}>
        {orderHistory.map((commande, index) => (
          <li
            key={commande._id || index}
            onClick={() => handleCommandeClick(commande)}
            style={{ cursor: "pointer" }}
          >
            Commande #{orderHistory.length - index} -{" "}
            {commande.statut || "en attente"}
          </li>
        ))}
      </ul>

      {selectedCommande && (
        <CommandeDetailModal commande={selectedCommande} onClose={closeModal} />
      )}
    </div>
  );
}