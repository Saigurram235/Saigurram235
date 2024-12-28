import React from "react";
import Nav_bar from "../inclueds/Nav_bar";
import Header_h from "../inclueds/header_h";
import Footer from "../inclueds/footer";
import HomePageSlider from "../inclueds/homepageslider";
import ProductSlider from "../inclueds/homeproduct";
import "../project.css";



function Home() {
  return (

<div className="d-flex flex-column min-vh-100">
  <Header_h />
  <Nav_bar />
 
  <div className="flex-grow-1">
    <HomePageSlider />
    <div className="text-scroller">
      <h1>Find everything you need to make studies easy!</h1>
    </div>
    <ProductSlider />
  </div>
  <Footer />
</div>

  );
}

export default Home;