import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mic from '../images/mic.png';
import mail from '../images/mail1.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import map from '../images/map.svg'; 

function header_h() {
    return (
        <Navbar className="bg-danger-subtle container-fluid p-0" expand="lg">
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Item>
            <img
              alt="mic icon"
              src={mic}
              width="30"
              height="30"
              className="d-inline-block align-bottom"
            />
          </Nav.Item>

          <Nav.Item>
            <i className="fs-6 ms-2">
              Your one-stop shop for books, stationery, and printing needs!!!!
            </i>
          </Nav.Item>
        </Nav>

        <Nav className="ms-auto align-items-center">
          <Nav.Item>
            <span>Contact Us : </span>
          </Nav.Item>

          <Nav.Item className="ms-3"> {/* Added margin-left for spacing */}
            <a href="mailto:gkstationeryandbookstore900@gmail.com">
              <img
                alt="mail icon"
                src={mail}
                width="20"
                height="20"
                className="d-inline-block align-bottom"
              />
            </a>
          </Nav.Item>

          <Nav.Item className="ms-3">
            <a href="https://www.facebook.com/gkstationaryandbookstore/">
              <img
                alt="facebook icon"
                src={facebook}
                width="20"
                height="20"
                className="d-inline-block align-bottom"
              />
            </a>
          </Nav.Item>

          <Nav.Item className="ms-3">
            <a href="https://www.instagram.com/gkstationary/">
              <img
                alt="instagram icon"
                src={instagram}
                width="20"
                height="20"
                className="d-inline-block align-bottom"
              />
            </a>
          </Nav.Item>

          <Nav.Item className="ms-3">
            <a href="https://maps.app.goo.gl/qGCqURUxVjpXpRxv8">
                <img
                alt="map icon"
                src={map}
                width="20"
                height="20"
                className="d-inline-block align-bottom"
              />
            </a>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
    );
}

export default header_h;