import React, { useState } from "react";
// import classes from './Layout.module.css';
import NavBar from "../components/NavBar";

function Layout(props) {
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
