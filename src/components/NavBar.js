import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import classes from "./NavBar.module.css";

const SECTION_IDS = ["home", "about", "announcements", "give", "connect"];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navOffcanvasClassName = `${classes["nav-offcanvas"]}`;
  const navOffcanvasBodyClassName = `${classes["nav-offcanvas-body"]}`;

  // Smooth scroll for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is active if its top is above the navbar and its bottom is below the navbar
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced Nav click: redirect to homepage if on /admin
  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    if (window.location.pathname.startsWith('/admin')) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // 80px for navbar
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      // Optionally update the URL hash
      window.history.replaceState(null, '', `/#${id}`);
    }
  };

  return (
    <Navbar key="lg" expand="lg" bg="dark" variant="dark" className="mb-3 fixed-top" style={{zIndex: 1050, backgroundColor: '#222'}}>
      <Container fluid style={{ backgroundColor: '#222' }}>
        <Navbar.Brand href="/#home" style={{ backgroundColor: '#222' }}>CCF LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          className={navOffcanvasClassName}
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header
            closeButton
            data-bs-theme="dark"
            className="justify-content-end"
            style={{ fontSize: "1.5rem" }}
          >
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={navOffcanvasBodyClassName}>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link active={false} onClick={handleNavClick("home")} tabIndex={0} role="button"
                className={activeSection === "home" ? "active" : ""}>Home</Nav.Link>
              <Nav.Link active={false} onClick={handleNavClick("about")} tabIndex={0} role="button"
                className={activeSection === "about" ? "active" : ""}>About</Nav.Link>
              <Nav.Link active={false} onClick={handleNavClick("announcements")} tabIndex={0} role="button"
                className={activeSection === "announcements" ? "active" : ""}>Announcements</Nav.Link>
              <Nav.Link active={false} onClick={handleNavClick("give")} tabIndex={0} role="button"
                className={activeSection === "give" ? "active" : ""}>Give</Nav.Link>
              <Nav.Link active={false} onClick={handleNavClick("connect")} tabIndex={0} role="button"
                className={activeSection === "connect" ? "active" : ""}>Connect</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
