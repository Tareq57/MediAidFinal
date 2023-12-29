import React from "react";
import logo from "../../assets/images/logo.svg";
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
// 0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08)
const Header = () => {
  return (
    <header
      className="header flex items-center relative z-1010"
      style={{
        boxShadow: "0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <div className="container px-[100px] py-[5px] ">
        <div className="flex items-center justify-between">
          <div className="w-[650px] flex items-center justify-between">
            <div>
              <img src={logo} className="w-[120px] object-cover" alt="" />
            </div>

            <div className="navigation">
              <ul className="menu flex items-center">
                <li className="menu-item p-[10px] hover:underline hover:underline-offset-[15px]">
                  <NavLink
                    to="/"
                    className={(navClass) =>
                      navClass.isActive ? "font-bold text-orange-500 " : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="menu-item p-[10px] hover:underline hover:underline-offset-[15px]">
                  <NavLink
                    to="/about"
                    className={(navClass) =>
                      navClass.isActive ? "font-bold text-orange-500" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="menu-item p-[10px] hover:underline hover:underline-offset-[15px]">
                  <NavLink
                    to="/doctors"
                    className={(navClass) =>
                      navClass.isActive ? "font-bold text-orange-500" : ""
                    }
                  >
                    Find a Doctor
                  </NavLink>
                </li>
                <li className="menu-item p-[10px] hover:underline hover:underline-offset-[15px]">
                  <NavLink
                    to="/none"
                    className={(navClass) =>
                      navClass.isActive ? "font-bold text-orange-500" : ""
                    }
                  >
                    MediShop
                  </NavLink>
                </li>
                <li className="menu-item p-[10px] hover:underline hover:underline-offset-[15px]">
                  <NavLink
                    to="/none"
                    className={(navClass) =>
                      navClass.isActive ? "font-bold text-orange-500" : ""
                    }
                  >
                    MediLab
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex">
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-[3px] px-4 rounded-full">
              Login/SignUp
            </button> */}

            <NavLink to="/Login">
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full"
              >
                Login/Sign Up
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
