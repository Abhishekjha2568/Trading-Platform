import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        "https://trading-platform-backend-ljdq.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      if (data.success) {
        navigate("/login"); 
      }
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        
        {/* Logo */}
        <Link
          className="navbar-brand fw-bold fs-4 text-primary"
          to="/"
        >
          📈 TradeFlow
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu aligned right */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleLogout}
                type="button"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
