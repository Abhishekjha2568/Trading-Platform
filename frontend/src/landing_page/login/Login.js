import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { ...inputValue },
        { withCredentials: true }
      );
      
     
      const { success, message, token, username } = data;

      if (success) {
        
        localStorage.setItem("token", token);
        localStorage.setItem("username", username || "USERID"); 
        
        toast.success(message);
        
        setTimeout(() => {
          
          window.location.href = "/dashboard"; 
        }, 1000);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="form_container" style={{ padding: "50px", textAlign: "center" }}>
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input type="email" name="email" value={email} placeholder="Enter email" onChange={handleOnChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input type="password" name="password" value={password} placeholder="Enter password" onChange={handleOnChange} required />
        </div>
        <button type="submit" style={{ backgroundColor: "#387ed1", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Login
        </button>
        <p style={{ marginTop: "15px" }}>
          Don't have an account? <Link to="/signup" style={{ color: "#387ed1", textDecoration: "none", fontWeight: "bold" }}>Signup</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;