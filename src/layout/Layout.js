import React from "react";
import NavBar from "../components/NavBar";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main style={{ marginTop: 80 }}>{children}</main>
  </>
);

export default Layout;

