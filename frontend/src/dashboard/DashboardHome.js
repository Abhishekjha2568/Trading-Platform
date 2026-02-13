import React from "react";
import { Navigate } from "react-router-dom"; 
import Home from "./components/Home";

function DashboardHome() {
  
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

 
  return (
    <>
      <Home />
    </>
  );
}

export default DashboardHome;