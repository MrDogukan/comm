import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar1 from "../components/Navbar";

const AppRouter = () => {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
