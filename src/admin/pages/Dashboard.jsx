import { useEffect, useState } from "react";

const API = "http://localhost:1203";

function StatCard({ label, value, color, loading }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "1.5rem 2rem",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      minWidth: "180px",
      flex: 1,
      borderTop: `4px solid ${color}`,
    }}>
      <p style={{ color: "#888", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{label}</p>
      <h2 style={{ color: "#333", margin: 0, fontSize: "2rem" }}>
        {loading ? "…" : value}
      </h2>
    </div>
  );
}

function Dashboard() {
  const [stats, setStats] = useState({
    totalClients: 0,
    totalProduits: 0,
    totalCommandes: 0,
    commandesEnAttente: 0,
    commandesEnCours: 0,
    commandesPrêtes: 0,
    chiffreAffaires: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);
      try {
        const [clientsRes, produitsRes, commandesRes] = await Promise.all([
          fetch(`${API}/dataUser`),
          fetch(`${API}/produits`),
          fetch(`${API}/commandes`),
        ]);

        if (!clientsRes.ok || !produitsRes.ok || !commandesRes.ok) {
          throw new Error("Erreur lors du chargement des données");
        }

        const [clients, produits, commandes] = await Promise.all([
          clientsRes.json(),
          produitsRes.json(),
          commandesRes.json(),
        ]);

        const enAttente = commandes.filter(c => c.statut === "en attente").length;
        const enCours   = commandes.filter(c => c.statut === "en cours").length;
        const prêtes    = commandes.filter(c => c.statut === "prêt").length;
        const ca        = commandes.reduce((sum, c) => sum + (c.total || 0), 0);

        setStats({
          totalClients: clients.length,
          totalProduits: produits.length,
          totalCommandes: commandes.length,
          commandesEnAttente: enAttente,
          commandesEnCours: enCours,
          commandesPrêtes: prêtes,
          chiffreAffaires: ca,
        });
      } catch (err) {
        console.error("Erreur dashboard:", err);
        setError("Impossible de charger les statistiques. Vérifiez que le serveur est démarré.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "2rem", background: "#f5f6fa", minHeight: "100vh" }}>
      <h1 style={{ color: "#333", marginBottom: "0.3rem" }}>📊 Dashboard</h1>
      <p style={{ color: "#999", marginBottom: "2rem", fontSize: "0.9rem" }}>
        Données en temps réel • Mise à jour automatique toutes les 30s
      </p>

      {error && (
        <div style={{
          background: "#fff3cd", border: "1px solid #ffc107",
          borderRadius: "0.5rem", padding: "1rem", marginBottom: "1.5rem", color: "#856404"
        }}>
          ⚠️ {error}
        </div>
      )}

      <h3 style={{ color: "#555", marginBottom: "1rem" }}>Vue globale</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
        <StatCard label="👥 Clients" value={stats.totalClients} color="#4e73df" loading={loading} />
        <StatCard label="🍽️ Produits" value={stats.totalProduits} color="#1cc88a" loading={loading} />
        <StatCard label="📦 Commandes totales" value={stats.totalCommandes} color="#f6c23e" loading={loading} />
        <StatCard
          label="💰 Chiffre d'affaires"
          value={`${stats.chiffreAffaires.toLocaleString("fr-FR")} Ar`}
          color="#e74a3b"
          loading={loading}
        />
      </div>

      <h3 style={{ color: "#555", marginBottom: "1rem" }}>Statuts des commandes</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <StatCard label="⏳ En attente" value={stats.commandesEnAttente} color="#f6c23e" loading={loading} />
        <StatCard label="🔄 En cours" value={stats.commandesEnCours} color="#4e73df" loading={loading} />
        <StatCard label="✅ Prêtes" value={stats.commandesPrêtes} color="#1cc88a" loading={loading} />
      </div>
    </div>
  );
}

export default Dashboard;