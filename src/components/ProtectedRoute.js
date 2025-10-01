import React, { useEffect, useState } from "react";
import { isAuthenticated, isAdminUser } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkAdmin() {
      if (!isAuthenticated()) {
        setIsAdmin(false);
        setError("You are not authenticated. Please log in.");
        return;
      }
      const admin = await isAdminUser();
      setIsAdmin(admin);
      if (!admin) {
        setError("You do not have admin access.");
      }
    }
    checkAdmin();
  }, []);

  if (isAdmin === null) {
    // Loading state
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return (
      <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>
        {error}
        <br />
        <a href="/admin/login">Go to Admin Login</a>
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
