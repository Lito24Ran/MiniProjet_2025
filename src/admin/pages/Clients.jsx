import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';

const columns = [
  { id: 'name', label: 'Nom', minWidth: 150 },
  { id: 'email', label: 'Email', minWidth: 200 },
  { id: 'level', label: 'Niveau', minWidth: 100 },
];

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1203/clients')
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error('Erreur fetch clients:', err));
  }, []);

  return <CustomTable columns={columns} rows={clients} uniqueKey="_id" />;
}