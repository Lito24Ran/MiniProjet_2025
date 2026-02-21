import { Navigate } from "react-router-dom";

/**
 * ProtectedAdminRoute — garde les routes admin
 * Redirige vers /login si l'utilisateur n'est pas connecté
 * ou s'il n'a pas le niveau "admin"
 */
function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const userRaw = localStorage.getItem("user");

  // Pas de token → pas connecté
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Vérification du niveau admin
  try {
    const user = JSON.parse(userRaw);
    if (!user || user.level !== "admin") {
      // Connecté mais pas admin → retour à l'accueil
      return <Navigate to="/" replace />;
    }
  } catch {
    // JSON corrompu → on redirige
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedAdminRoute;