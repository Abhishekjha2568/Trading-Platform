import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Link add kiya gaya hai
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://trading-platform-backend-ljdq.onrender.com/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        toast.success(message);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="form_container" style={{ padding: "50px", textAlign: "center" }}>
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input type="email" name="email" value={email} placeholder="Enter email" onChange={handleOnChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input type="text" name="username" value={username} placeholder="Enter username" onChange={handleOnChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input type="password" name="password" value={password} placeholder="Enter password" onChange={handleOnChange} required />
        </div>
        <button type="submit" style={{ backgroundColor: "#387ed1", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Submit
        </button>

       
        <p style={{ marginTop: "15px" }}>
          Already have an account? <Link to="/login" style={{ color: "#387ed1", textDecoration: "none", fontWeight: "bold" }}>Login</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;