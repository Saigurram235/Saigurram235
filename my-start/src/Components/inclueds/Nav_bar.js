import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="md" className="bg-body-tertiary">
      <Container>
        {/* Logo - Always Visible */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            alt="Logo"
            src={logo}
            width="45"
            height="45"
            className="d-inline-block align-bottom me-2"
          />
          {/* Title Hidden on Mobile */}
          <span className="fs-4 fw-bold d-none d-md-block">G.K Stationary & Bookstore</span>
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Navbar Section */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto fs-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Service 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Service 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#about-us">About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
