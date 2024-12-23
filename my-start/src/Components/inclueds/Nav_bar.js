import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';

function Nav_bar() {
  return (
<Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand class="d-flex align-bottom">
          
            <img
              alt="" href="#home"
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-bottom"
            />{' '}
        </Navbar.Brand>
           
          <Nav className="me-auto fs-3">
            <Nav.Link href="#home">G.K Stationary & Bookstore</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="d-flex justify-content-end " id="basic-navbar-nav" >
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <NavDropdown title="Servies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                About Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>
  );
}


export default Nav_bar;