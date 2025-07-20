export const columns = [
  { id: 'clientNom', label: 'Client', minWidth: 150 },
  { id: 'niveau', label: 'Niveau', minWidth: 100 },
  { id: 'methodePaiement', label: 'Paiement', minWidth: 100 },
  { id: 'total', label: 'Total', minWidth: 100 },
  { id: 'statut', label: 'Statut', minWidth: 100 }, // ajouter statut sur le format d'afichage
  { id: 'date', label: 'Date', minWidth: 150 },
  { id: 'produitsDisplay', label: 'Produits', minWidth: 300 },
];

export function formatCommandes(commandes) {
  return commandes.map(cmd => ({
    ...cmd,
    produitsDisplay: Array.isArray(cmd.produits)
      ? cmd.produits.map(p => `${p.nom} x${p.quantity} (${p.prix} Ar)`).join(", ")
      : '',
  }));
}