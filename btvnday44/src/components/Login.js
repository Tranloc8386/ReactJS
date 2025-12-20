import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userMail", email);
    localStorage.setItem("password", password);
    console.log("Da luu mail", email);
    console.log("Loading...");
    navigate("/dashboard");
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div>
      <form className="formBtn" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Nhap email..."
          required
          value={email}
          onChange={(e)=> setemail(e.target.value)}
        ></input>
        <input
          type="text"
          id="password"
          placeholder="Nhap mat khau..."
          required
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
