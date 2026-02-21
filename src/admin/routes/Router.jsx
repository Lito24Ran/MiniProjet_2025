import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedAdminRoute from "../components/ProtectedAdminRoute";

import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Commande from "../pages/Commande";
import Clients from "../pages/Clients";

const Router = () => {
  return (
    <ProtectedAdminRoute>
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Commande" element={<Commande />} />
        <Route path="Products" element={<Products />} />
        <Route path="Clients" element={<Clients />} />
      </Routes>
    </ProtectedAdminRoute>
  );
};

export default Router;