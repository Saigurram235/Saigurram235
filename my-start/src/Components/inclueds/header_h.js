import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import mic from "../images/mic.png";
import mail from "../images/mail1.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import map from "../images/map.svg";
import "../project.css"; // Ensure this CSS file includes styles for the marquee and responsiveness.

function HeaderH() {
  return (
    <>
      <Navbar className="bg-danger-subtle container-fluid p-0" expand="lg">
        <Container fluid>
          <Nav className="me-auto align-items-center">
            {/* Mic Icon */}
            <Nav.Item>
              <img
                alt="mic icon"
                src={mic}
                width="30"
                height="30"
                className="d-inline-block align-bottom d-none d-lg-flex"
              />
            </Nav.Item>

            {/* Scrolling Text */}
            <Nav.Item className="ms-3 marquee-container">
              <div className="marquee">
                <span>Your one-stop shop for books, stationery, and printing needs!!!!</span>
              </div>
            </Nav.Item>
          </Nav>

          {/* Contact Us Section */}
          <Nav className="ms-auto align-items-center contact-icons d-none d-lg-flex">
            <Nav.Item>
              <span>Contact Us:</span>
            </Nav.Item>
            <Nav.Item className="ms-3">
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

      {/* Mobile View - Contact Us at Bottom */}
      <div className="contact-us-mobile d-lg-none bg-danger-subtle text-center p-2">
        <span>Contact Us:</span>
        <a
          href="mailto:gkstationeryandbookstore900@gmail.com"
          className="ms-2"
        >
          <img alt="mail icon" src={mail} width="20" height="20" />
        </a>
        <a
          href="https://www.facebook.com/gkstationaryandbookstore/"
          className="ms-2"
        >
          <img alt="facebook icon" src={facebook} width="20" height="20" />
        </a>
        <a href="https://www.instagram.com/gkstationary/" className="ms-2">
          <img alt="instagram icon" src={instagram} width="20" height="20" />
        </a>
        <a href="https://maps.app.goo.gl/qGCqURUxVjpXpRxv8" className="ms-2">
          <img alt="map icon" src={map} width="20" height="20" />
        </a>
      </div>
    </>
  );
}

export default HeaderH;
