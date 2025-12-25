import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <div className="bg-blue-500">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/cart" element=<Cart /> />
      </Routes>
    </div>
  );
};

export default App;
