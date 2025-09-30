import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, loginWithGoogle } from "../utils/firebaseAuth";
import NavBar from "../components/NavBar";

const ALLOWED_ADMINS = [
    "zpatricklee@gmail.com",
  "isaackmun@gmail.com",
  "crosslifechristianfellowship@gmail.com",
    "angjho123@gmail.com"
]; // Replace with your allowed Google emails

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/admin");
    } catch (err) {
      setError(err.message || "Login failed.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const result = await loginWithGoogle();
      const email = result.user.email;
      if (!ALLOWED_ADMINS.includes(email)) {
        setError("You are not authorized to access admin features.");
        await result.user.getIdToken(); // Ensure token is refreshed
        await result.user.delete(); // Optionally delete user if created
        return;
      }
      navigate("/admin");
    } catch (err) {
      setError(err.message || "Google login failed.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5" style={{ maxWidth: 400 }}>
        <h2 className="mb-4 text-center" style={{ color: '#fff', fontWeight: 700 }}>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#fff', fontWeight: 500 }}>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
              style={{ background: '#222', color: '#fff', border: '1px solid #888', fontWeight: 500 }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#fff', fontWeight: 500 }}>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ background: '#222', color: '#fff', border: '1px solid #888', fontWeight: 500 }}
            />
          </div>
          {error && <div className="alert alert-danger" style={{ fontWeight: 500 }}>{error}</div>}
          <button className="btn btn-primary w-100" type="submit" style={{ fontWeight: 700 }}>Login</button>
        </form>
        <button className="btn btn-outline-secondary w-100 mb-3" type="button" onClick={handleGoogleLogin} style={{ fontWeight: 700 }}>
          Sign in with Google
        </button>
        <div className="mt-3 text-center" style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
          Don't have an account? <a href="/admin/signup" style={{ color: '#03dac6', textDecoration: 'underline', fontWeight: 700, fontSize: '1.1rem' }}>Sign up</a>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
