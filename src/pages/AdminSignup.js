import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../utils/firebaseAuth";

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      let verificationError = null;
      try {
        await sendEmailVerification(userCredential.user);
      } catch (ve) {
        verificationError = ve.message || JSON.stringify(ve);
      }
      if (verificationError) {
        setSuccess("");
        setError("Account created, but failed to send verification email: " + verificationError);
      } else {
        setSuccess("Account created! Please check your email to verify your account before logging in.");
      }
      setLoading(false);
      setTimeout(() => navigate("/admin/login"), 3000);
    } catch (err) {
      setError(err.message || JSON.stringify(err));
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 400, margin: "48px auto", background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
      <h2 className="mb-4 text-center">Admin Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>{loading ? "Signing up..." : "Sign Up"}</button>
      </form>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {success && <div className="alert alert-success mt-3">{success}</div>}
      <div className="mt-3 text-center">
        Already have an account? <Link to="/admin/login">Log in</Link>
      </div>
    </div>
  );
};

export default AdminSignup;
