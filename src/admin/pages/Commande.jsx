import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';

const columns = [
  { id: 'nomClient', label: 'Nom du client', minWidth: 150 },
  { id: 'numeroTel', label: 'Téléphone', minWidth: 150 },
  { id: 'numeroCarte', label: 'N° carte', minWidth: 150 },
  { id: 'plats.nomPlat', label: 'Plat', minWidth: 150 },
  { id: 'plats.quantite', label: 'Quantité', minWidth: 100 },
  { id: 'plats.prix', label: 'Prix', minWidth: 100 },
];

export default function Commande() {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
  fetch('http://localhost:1203/commandes')
    .then((res) => res.json())
    .then((data) => {
  if (Array.isArray(data)) {
    setCommandes(data);
  } else {
    console.error("Données invalides reçues:", data);
    setCommandes([]); // éviter l'erreur map
  }
})
    .catch((err) => console.error('Erreur fetch commandes:', err));
}, []);


  const flatCommandes = commandes.map((cmd) => ({
    ...cmd,
    'plats.nomPlat': cmd.plats?.nomPlat,
    'plats.quantite': cmd.plats?.quantite,
    'plats.prix': cmd.plats?.prix,
  }));

  return <CustomTable columns={columns} rows={flatCommandes} uniqueKey="_id" />;
}