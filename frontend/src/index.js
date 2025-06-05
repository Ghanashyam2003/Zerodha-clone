import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/Aboutpage";
import ProductPage from "./landing_page/products/ProductsPage";
import Pricing from "./landing_page/pricing/pricingPage";
import NotFound from "./landing_page/NotFound";
import SupportPage from "./landing_page/support/Supportpage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/*" element={<NotFound />} />
      <Route path="" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<SupportPage />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
);
