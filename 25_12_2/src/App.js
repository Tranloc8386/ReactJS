import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UsersList from "./pages/Users/UsersList";
import UserDetail from "./pages/Users/UserDetail";
import ProductsList from "./pages/Products/ProductsList";
import ProductDetail from "./pages/Products/ProductDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/productslist" element={<ProductsList />} />
      <Route path="/productdetailed/:id" element={<ProductDetail />} />
      <Route path="/userslist" element={<UsersList />} />
      <Route path="userdetailed/:id" element={<UserDetail />} />
    </Routes>
  );
};

export default App;
