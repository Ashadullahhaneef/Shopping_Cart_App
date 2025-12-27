import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="flex flex-row justify-between items-center ml-3 mr-3 h-10">
      <NavLink to="/">
        <div className="w-[50px]">
          <img src="../image7.jpg" alt="logo" />
        </div>
      </NavLink>
      <div className="flex gap-[50px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">
          <div>
            <sub>
              <span>{cart.length}</span>
            </sub>
            <FaShoppingCart />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
