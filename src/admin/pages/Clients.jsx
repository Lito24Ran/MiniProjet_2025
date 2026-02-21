import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';

const columns = [
  { id: 'name', label: 'Nom', minWidth: 150 },
  { id: 'level', label: 'Niveau', minWidth: 100 },
  { id: 'createdAt', label: 'Date', minWidth: 150 },
];

// Fonction pour formater les dates
function formatClients(clients) {
  return clients.map(client => {
    const dateObj = new Date(client.createdAt);
    const datePart = dateObj.toLocaleDateString('fr-FR', {
      timeZone: 'Indian/Antananarivo',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const timePart = dateObj.toLocaleTimeString('fr-FR', {
      timeZone: 'Indian/Antananarivo',
      hour: '2-digit',
      minute: '2-digit',
    });

    return {
      ...client,
      createdAt: `${datePart} à ${timePart}`,
    };
  });
}

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = () => {
      fetch('http://localhost:1203/dataUser')
        .then(res => {
          if (!res.ok) throw new Error("Erreur serveur");
          return res.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            setClients(formatClients(data));
            setError(null);
          } else {
            setError("Format de données inattendu.");
          }
        })
        .catch(err => {
          console.error('Erreur fetch clients:', err);
          setError("Impossible de charger les clients. Vérifiez que le serveur est démarré.");
        });
    };
  
    fetchClients();
    const intervalId = setInterval(fetchClients, 10000);
    return () => clearInterval(intervalId);
  }, []);  

  return (
    <>
      {error && (
        <div style={{
          background: "#fff3cd", border: "1px solid #ffc107",
          borderRadius: "0.5rem", padding: "1rem", margin: "1rem",
          color: "#856404"
        }}>
          ⚠️ {error}
        </div>
      )}
      <CustomTable
        columns={columns}
        rows={clients}
        uniqueKey="_id"
      />
    </>
  );
}