import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import Login from "./components/Login";
import DetailedProducts from "./components/DetailedProducts";

const App = () => {
  
  return (<div>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/shoppingcart" element={<ShoppingCart />} />
    <Route path="/detailedproducts" element={<DetailedProducts />} />
    <Route path="/detailedproducts/:id" element={<DetailedProducts />} />
  </Routes>;
  </div>);
};

export default App;
