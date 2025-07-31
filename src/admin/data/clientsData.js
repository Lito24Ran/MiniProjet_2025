export function formatClients(clients) {
  return clients.map(client => {
    const dateObj = new Date(client.date);
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
      date: `${datePart} à ${timePart}`,
    };
  });
}
