import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center ml-3 mr-3 h-10">
      <NavLink to="/">
        <div>
          <img src="image.jpg" alt="logo" />
        </div>
      </NavLink>
      <div className="flex gap-[50px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">
          <div>
            <FaShoppingCart />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
