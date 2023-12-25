import React from "react";
import logo from "../../assets/images/logo.svg";
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button"


const Header = () => {
  return (
    <header className="header flex items-center shadow-lg">
      <div className="container px-[100px] py-[10px]">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} className="w-[120px] object-cover" alt="" />
          </div>

          <div className="navigation">
            <ul className="menu flex items-center">
              <li className="menu-item p-[10px]">
                <NavLink
                  to="/"
                  className={(navClass) =>
                    navClass.isActive ? "font-bold text-orange-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="menu-item p-[10px]">
                <NavLink
                  to="/about"
                  className={(navClass) =>
                    navClass.isActive ? "font-bold text-orange-500" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="menu-item p-[10px]">
                <NavLink
                  to="/doctors"
                  className={(navClass) =>
                    navClass.isActive ? "font-bold" : ""
                  }
                >
                  Find a Doctor
                </NavLink>
              </li>
              <li className="menu-item p-[10px]">
                <NavLink
                  to="/doctors"
                  className={(navClass) =>
                    navClass.isActive ? "font-bold" : ""
                  }
                >
                  MediShop
                </NavLink>
              </li>
              <li className="menu-item p-[10px]">
                <NavLink
                  to="/doctors"
                  className={(navClass) =>
                    navClass.isActive ? "font-bold" : ""
                  }
                >
                  MediLab
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex">
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-[3px] px-4 rounded-full">
              Login/SignUp
            </button> */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white py-[10px] font-bold rounded-full">Login/Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
