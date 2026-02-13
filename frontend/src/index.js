import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // useLocation yahan add kiya hai
import './index.css';

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login"; 
import Aboutpage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import DashboardHome from "./dashboard/DashboardHome"; 
import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

// Ek naya component banaya hai jo location check karega
const MainApp = () => {
  const location = useLocation();
  
  // Agar path '/dashboard' se start hota hai, toh isDashboard true ho jayega
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Agar hum dashboard par nahi hain, tabhi Navbar dikhega */}
      {!isDashboard && <Navbar />}
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/dashboard/*" element={<DashboardHome />} /> 
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer ke liye bhi same logic */}
      {!isDashboard && <Footer />}
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <MainApp />
   </BrowserRouter>
);