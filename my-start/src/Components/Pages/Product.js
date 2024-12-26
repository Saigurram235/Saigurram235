import React from "react";
import "../project.css";
import Nav_bar from "../inclueds/Nav_bar";
import ProductSlider from "../inclueds/productslider";
import Footer from "../inclueds/footer";

function Product() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav_bar />
      <h1 id="prod">NoteBooks</h1>
      <div className="product-slider">
        <ProductSlider />
      </div>
      <h1 id="prod">Materials</h1>
      <div className="product-slider">
        <ProductSlider />
      </div>
      <h1 id="prod">Stationary</h1>
      <div className="product-slider">
        <ProductSlider />
      </div>
      <h1 id="prod">WorkBooks</h1>
      <div className="product-slider">
        <ProductSlider />
      </div>
      <h1 id="prod">All Other Types of Books</h1>
      <div className="product-slider">
        <ProductSlider />
      </div>
      <Footer />
    </div>
  );
}

export default Product;
