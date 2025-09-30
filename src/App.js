import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.js";
import HomePage from "./pages/HomePage.js";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminAnnouncements />
          </ProtectedRoute>
        } />
      </Routes>
    </Layout>
  );
}

export default App;
