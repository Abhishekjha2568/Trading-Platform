import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const username = localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <div className="menu-container" style={{ 
      display: "flex", 
      alignItems: "center", 
      padding: "12px 35px", 
      borderBottom: "1px solid #eee", 
      backgroundColor: "white",
      justifyContent: "space-between" 
    }}>
      
    
      <div className="logo-section">
        <img src="/logo.png" alt="logo" style={{ width: "28px", cursor: "pointer" }} />
      </div>


      <div className="menus" style={{ marginLeft: "auto", marginRight: "80px" }}> 
        <ul style={{ display: "flex", listStyle: "none", gap: "40px", margin: 0, padding: 0 }}>
          {["Dashboard", "Orders", "Holdings", "Positions", "Funds"].map((item, index) => (
            <li key={item}>
              <Link 
                style={{ textDecoration: "none" }} 
                to={index === 0 ? "/dashboard" : `/dashboard/${item.toLowerCase()}`}
                onClick={() => setSelectedMenu(index)}
              >
                <p style={{ 
                  margin: 0, 
                  fontSize: "14px", 
                  fontWeight: "500", 
                  color: selectedMenu === index ? "#D35400" : "#666",
                  transition: "0.3s"
                }}>{item}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>


      <div className="profile-section" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ 
            width: "28px", height: "28px", borderRadius: "50%", background: "#f0f0f0", 
            display: "flex", alignItems: "center", justifyContent: "center", 
            fontSize: "12px", fontWeight: "bold", color: "#666" 
          }}>
            {username.charAt(0).toUpperCase()}
          </div>
          <span style={{ fontSize: "13px", color: "#444", fontWeight: "500" }}>{username}</span>
        </div>
        
        {/* Logout button ko Red aur prominent kiya gaya hai */}
        <button 
          onClick={handleLogout}
          style={{ 
            border: "1px solid #eb5757", 
            background: "none", 
            color: "#eb5757", 
            padding: "5px 12px", 
            borderRadius: "4px",
            fontSize: "12px", 
            cursor: "pointer",
            fontWeight: "600",
            transition: "0.3s"
          }}
          onMouseOver={(e) => { e.target.style.background = "#eb5757"; e.target.style.color = "white"; }}
          onMouseOut={(e) => { e.target.style.background = "none"; e.target.style.color = "#eb5757"; }}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Menu;