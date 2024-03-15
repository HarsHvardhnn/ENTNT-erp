import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
        <div className="flex gap-12">
          <NavLink to="/" className="inline-block">
            <p className="group-hover:before:absolute  group-hover:before:block group-hover:before:content-[''] group-hover:before:bg-black group-hover:before:h-[2px] group-hover:before:w-0 group-hover:before:transition-all group-hover:before:left-0 group-hover:before:bottom-0"></p>
            <p className="hover:text-blue-400 ">DashBoard</p>
          </NavLink>
          <NavLink to="/product">
            <p className=" hover:text-blue-400 active:bg-red">Products</p>
          </NavLink>
          <NavLink to="/order">
            <p className="hover:text-blue-400 ">Orders</p>
          </NavLink>
        </div>
        <div>
          <NavLink>@credits:Harsh</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
