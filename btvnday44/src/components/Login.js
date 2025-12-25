import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newuser = { email, password };
    users.push(newuser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newuser));

    //chuc nang dang nhap khi thanh cong
    localStorage.setItem("isLogin", "true");
    navigate("/dashboard");
  };

  return (
     <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 300,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Nhap email..."
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Nhap mat khau..."
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>

      <Stack spacing={2} sx={{ mt: 2 }}>
        <Button type="submit" variant="contained" fullWidth>
          Log in
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
