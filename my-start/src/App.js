
import React from 'react';
import Home from './Components/Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Product from "./Components/Pages/Product";
import About from "./Components/Pages/About";

function App() {
  return (
    <BrowserRouter>
    
      <Routes className="d-none">  
     <Route path="/" element={<Home />} />
     <Route path="/products" element={<Product />} />
     <Route path="/about" element={<About />} />
     {/* <Route path="/contact" element={<Contact />} /> */}
   </Routes>
    
    </BrowserRouter>


  );
}

export default App;
