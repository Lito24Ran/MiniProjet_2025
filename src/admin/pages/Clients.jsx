import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable'; // ou Ant Design Table

const columns = [
  { id: 'name', label: 'Nom', minWidth: 150 },
  { id: 'level', label: 'Niveau', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 150 }
];

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1203/clients')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setClients(data);
        else console.error('Format inattendu', data);
      })
      .catch(err => console.error('Erreur fetch clients:', err));
  }, []);

  return (
    <CustomTable
      columns={columns}
      rows={clients}
      uniqueKey="_id"
    />
  );
}
