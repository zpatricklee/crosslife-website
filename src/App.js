import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.js";
import HomePage from "./pages/HomePage.js";
import Announcements from "./pages/Announcements.js";
import ContactUs from "./pages/ContactUs.js";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
