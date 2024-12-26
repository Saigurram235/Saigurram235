import React from "react";
import "../project.css";
import mail from "../images/mail1.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import map from "../images/map.svg";

function Footer() {
return (
<div className="container-fluid my-5">
<footer
className="text-center text-lg-start text-white"
style={{ backgroundColor: "#1c2331" }}
>
{/* Social Media Section */}
<section
  className="d-flex justify-content-between p-4"
  style={{ backgroundColor: "#6351ce" }}
>
  <div className="me-5 d-none d-lg-flex">
    <span>Get connected with us on social networks:</span>
  </div>
  <div className="d-flex align-items-center">
    <a href="mailto:gkstationeryandbookstore900@gmail.com" className="me-4">
      <img
        alt="mail icon"
        src={mail}
        width="20"
        height="20"
        className="d-inline-block align-bottom"
      />
    </a>
    <a href="https://www.facebook.com/gkstationaryandbookstore/" className="me-4">
      <img
        alt="facebook icon"
        src={facebook}
        width="20"
        height="20"
        className="d-inline-block align-bottom"
      />
    </a>
    <a href="https://www.instagram.com/gkstationary/" className="me-4">
      <img
        alt="instagram icon"
        src={instagram}
        width="20"
        height="20"
        className="d-inline-block align-bottom"
      />
    </a>
    <a href="https://maps.app.goo.gl/qGCqURUxVjpXpRxv8" className="me-4">
      <img
        alt="map icon"
        src={map}
        width="20"
        height="20"
        className="d-inline-block align-bottom"
      />
    </a>
  </div>
</section>


    {/* Footer Links Section */}
        <section>
            <div className="container-fluid text-center text-md-start mt-5">
            <div className="row mt-3">
                {/* Company Info */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company Name</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                    }}
                />
                <p>
                    G.K Stationary & BookStore <br />
                    Old SBI Road, Pamuru, Prakasam <br />
                    AP - 523108
                </p>
                </div>

                {/* Products */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                    }}
                />
                <p>
                    <a href="#!" className="text-white">
                    Books
                    </a>
                </p>
                <p>
                    <a href="#!" className="text-white">
                    Notebooks
                    </a>
                </p>
                <p>
                    <a href="#!" className="text-white">
                    Stationery
                    </a>
                </p>
                <p>
                    <a href="#!" className="text-white">
                    School Supplies
                    </a>
                </p>
                </div>

                {/* Useful Links */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful Links</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                    }}
                />
                <p>
                    <a href="https://wa.me/+919505447241" target="_blank" rel="noopener noreferrer"  className="text-white">
                    Contact Us
                    </a>
                </p>
                <p>
                    <a href="#!" className="text-white">
                    About Us
                    </a>
                </p>
                <p>
                    <a href="https://www.google.com/maps/place/G.K+stationary+and+Bookstore+(+Xerox+)/@15.0948868,79.4075725,17z/data=!4m8!3m7!1s0x3a4b4bebe8445fe3:0x7357a94aff3a17cb!8m2!3d15.0948868!4d79.4101474!9m1!1b1!16s%2Fg%2F11j1mcn1yz?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className="text-white">
                    Store Reviews
                    </a>
                </p>
                </div>

                {/* Contact Info */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                    }}
                />
                <p>
                    <i className="fas fa-home mr-3"></i> Pamuru, AP - 523108
                </p>
                <p>
                    <a className="fas fa-envelope mr-3" href="mailto:gkstationeryandbookstore900@gmail.com">gkstationeryandbookstore900@gmail.com</a> 
                </p>
                <p>
                    <a className="fas fa-phone mr-3" href="tel:+1234567890">+91 95054 47241</a> 
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-white" href="#">
              G.K Stationery
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
