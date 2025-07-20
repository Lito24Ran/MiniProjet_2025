import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';
import { columns, formatCommandes } from '../data/CommandesData';

export default function Commande() {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1203/commandes')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCommandes(formatCommandes(data));
        } else {
          console.error("Données invalides reçues:", data);
          setCommandes([]);
        }
      })
      .catch(err => console.error('Erreur fetch commandes:', err));
  }, []);

  return <CustomTable columns={columns} rows={commandes} uniqueKey="_id" />;
}