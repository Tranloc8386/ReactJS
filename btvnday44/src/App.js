import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NotFount from "./components/NotFount";
import Login from "./components/Login";
import "antd/dist/reset.css";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
};

export default App;
