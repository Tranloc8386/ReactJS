import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate =useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const account={username: "user", password:"user1234"};

  const handleSubmit=(e)=>{
   e.preventDefault();
    if(username===account.username && password===account.password){
      navigate("/dashboard");
      localStorage.setItem("user", JSON.stringify({username: username, password: password}))
    }else{
      alert("Tai khoan hoac mat khau khong hop le!")
    }
  }

   return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Nhap Ten..."
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Mat khau</label>
          <input
            type="password"
            placeholder="Nhap mat khau..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button>Log in</button>

        
      </form>
    </div>
  );


}

 

export default Login;
