import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const navOffcanvasClassName = `${classes["nav-offcanvas"]}`;
  const navOffcanvasBodyClassName = `${classes["nav-offcanvas-body"]}`;

  return (
    <Navbar key="lg" expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="/">CCF LOGO</Navbar.Brand>
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
          ></Offcanvas.Header>
          <Offcanvas.Body className={navOffcanvasBodyClassName}>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Announcements">Announcements</Nav.Link>
              <Nav.Link href="/Contact">Contact Us</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="offcanvasNavbarDropdown-expand-lg"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
