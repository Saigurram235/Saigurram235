import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../project.css";

function HomePageSlider () {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>

      {/* Carousel Items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Slide</h5>
            <p>Sample description for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide</h5>
            <p>Sample description for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide</h5>
            <p>Sample description for the third slide.</p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HomePageSlider;
