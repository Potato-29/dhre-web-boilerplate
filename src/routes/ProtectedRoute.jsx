// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "../hooks/useIsAuthenticated";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
