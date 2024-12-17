import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login  from "../../api/auth";
import "./style.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const data = await login(username, otp);
      localStorage.setItem("token", data.token); // Save token for authorization
      navigate("/quotes");
    } catch (error) {
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <div className="login-container">
  <div className="login-form">
    <h1>Login</h1>
    <input 
      placeholder="Username" 
      onChange={(e) => setUsername(e.target.value)} 
    />
    <input 
      placeholder="OTP" 
      type="password" 
      onChange={(e) => setOtp(e.target.value)} 
    />
    <button onClick={handleSubmit}>Login</button>
  </div>
</div>

  );
};

export default LoginPage;
