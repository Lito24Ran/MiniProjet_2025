export const columns = [
  { id: 'clientNom', label: 'Client', minWidth: 150 },
  { id: 'niveau', label: 'Niveau', minWidth: 100 },
  { id: 'methodePaiement', label: 'Paiement', minWidth: 100 },
  { id: 'total', label: 'Total', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 150 },
  { id: 'produitsDisplay', label: 'Produits', minWidth: 300 },
];

// Fonction pour préparer les données
export function formatCommandes(commandes) {
  return commandes.map(cmd => ({
    ...cmd,
    produitsDisplay: Array.isArray(cmd.produits)
      ? cmd.produits.map(p => `${p.nom} x${p.quantity} (${p.prix} Ar)`).join(", ")
      : '',
  }));
}