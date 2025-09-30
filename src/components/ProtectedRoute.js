import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, isAdminUser } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    async function checkAdmin() {
      if (!isAuthenticated()) {
        setIsAdmin(false);
        return;
      }
      const admin = await isAdminUser();
      setIsAdmin(admin);
    }
    checkAdmin();
  }, []);

  if (isAdmin === null) {
    // Loading state
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
