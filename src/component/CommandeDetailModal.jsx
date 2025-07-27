import React from "react";
import "./CommandeDetailModal.css";

function CommandeDetailModal({ commande, onClose }) {
  if (!commande) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Détails de la commande</h2>
        <p><strong>Nom:</strong> {commande.clientNom}</p>
        <p><strong>Niveau:</strong> {commande.niveau}</p>
        <p><strong>Mode de paiement:</strong> {commande.methodePaiement}</p>
        <p><strong>Total:</strong> {commande.total} Ar</p>
        <p><strong>Statut:</strong> {commande.status || "En attente"}</p>
        <h3>Produits:</h3>
        <ul>
          {commande.produits.map((prod, i) => (
            <li key={i}>
              {prod.nom} - {prod.quantity} x {prod.prix} Ar
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommandeDetailModal;