import React from "react";
import { useEffect, useRef } from "react";
import "./CommandeDetailModal.css";

function CommandeDetailModal({ commande, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
  console.log("Commande reçue dans modal :", commande);

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        {/* <button className="close-button" onClick={onClose}>
          ×
        </button> */}
        <h3>Détails de la commande</h3>
        <p><strong>Nom :</strong> {commande.clientNom}</p>
        <p><strong>Niveau :</strong> {commande.niveau}</p>
        <p><strong>Mode de paiement :</strong> {commande.methodePaiement}</p>
        <p><strong>Total :</strong> {commande.total} Ariary</p>
        <h4>Produits :</h4>
        <ul>
          {commande.produits.map((prod, idx) => (
            <li key={idx}>{prod.nom} x {prod.quantity} - {prod.prix} Ar</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommandeDetailModal;