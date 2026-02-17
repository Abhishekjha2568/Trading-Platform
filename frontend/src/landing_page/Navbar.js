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
        {/* Logo replaced */}
        <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
          📈 TradeFlow
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>

              <li className="nav-item">
                <button 
                  className="btn btn-outline-danger btn-sm ms-lg-3 mt-1" 
                  onClick={handleLogout}
                  type="button"
                >
                  Logout
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
