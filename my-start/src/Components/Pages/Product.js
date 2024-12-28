import React from "react";
import "../project.css";
import Nav_bar from "../inclueds/Nav_bar";
// import ProductSlider from "../inclueds/productslider";
import Footer from "../inclueds/footer";
import Notebooks from "../inclueds/NoteBooks";
import Materials from "../inclueds/Materials";
import Stationary from "../inclueds/Stationary";
import WorkBooks from "../inclueds/WorkBooks";
import AllOtherTypesOfBooks from "../inclueds/Others";

function Product() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav_bar />
      <h1 id="prod">NoteBooks</h1>
      <div className="product-slider">
        <Notebooks />
      </div>
      <h1 id="prod">Materials</h1>
      <div className="product-slider">
        {/* <ProductSlider /> */}
        <Materials />

      </div>
      <h1 id="prod">Stationary</h1>
      <div className="product-slider">
        {/* <ProductSlider /> */}
        <Stationary />

      </div>
      <h1 id="prod">WorkBooks</h1>
      <div className="product-slider">
        {/* <ProductSlider /> */}
        <WorkBooks />

      </div>
      <h1 id="prod">All Other Types of Books</h1>
      <div className="product-slider">
        {/* <ProductSlider /> */}
        <AllOtherTypesOfBooks />

      </div>
      <Footer />
    </div>
  );
}

export default Product;
