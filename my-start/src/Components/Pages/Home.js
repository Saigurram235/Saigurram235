import React from "react";
// import Navbar from "./Components/inclueds/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Home() {
  return (
    
        // <Navbar />
        <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="./Components/images/img/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Stationary & Bookstore
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <NavDropdown title="Servies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Xerox</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Lamination
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>

   
  );
}

export default Home;