import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between p-4 font-bold text-gray-500">
        <div className="relative">
          <a
            href="https://github.com/HarsHvardhnn/"
            className="hover:text-blue-400 transition-120"
          >
            <p>@Harsh (click me) </p>
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-500 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex gap-12">
          <NavLink to="/" className="inline-block">
            <p className="hover:text-blue-400">Dashboard</p>
          </NavLink>
          <NavLink to="/product">
            <p className="hover:text-blue-400">Products</p>
          </NavLink>
          <NavLink to="/order">
            <p className="hover:text-blue-400">Orders</p>
          </NavLink>
        </div>
        <div>
          <NavLink>@credits:Harsh</NavLink>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col gap-4 bg-gray-100 p-4">
            <NavLink to="/" className="inline-block">
              <p className="hover:text-blue-400">Dashboard</p>
            </NavLink>
            <NavLink to="/product">
              <p className="hover:text-blue-400">Products</p>
            </NavLink>
            <NavLink to="/order">
              <p className="hover:text-blue-400">Orders</p>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
