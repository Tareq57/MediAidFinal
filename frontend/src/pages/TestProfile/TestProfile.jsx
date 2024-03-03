import React, { useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { TbReport } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { BASE_URL } from "@/config";

const TestProfile = () => {
  const { state } = useContext(AuthContext);

  const { id } = useParams();

  const [navClass, setNavClass] = useState("dashboard");

  const [test, setTest] = useState(null);


  useEffect(() => {
    const fetchTest = async () => {
      const res1 = await fetch(
        `${BASE_URL}/test/getone/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }
      );

      if (!res1.ok) {
        throw new Error(result1.message);
      }

      const result1 = await res1.json();

      console.log(result1.data);

      setTest(result1.data);
    };

    if (state.user) {
      fetchTest();
    }
  }, []);

  return ( test &&
    <div className="mx-[180px] mt-[40px] min-h-[500px] flex justify-between">
      <div className="w-1/5 h-[500px] flex flex-col space-y-2">
        <div className="flex space-x-5 items-center my-[10px]">
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src={test.photo} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="items-center">
            <h1 className="text-md">{test.name}</h1>
          </div>
        </div>

        <Label className="font-bold text-base text-gray-400 pl-2">
          Appointments
        </Label>

        <NavLink
          to="appointments/current"
          className={(navClass) =>
            navClass.isActive ? setNavClass("current") : null
          }
        >
          <div
            className={`flex items-center space-x-2   ${
              navClass == "current"
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            } p-2 rounded-full cursor-pointer`}
          >
            <MdOutlineEventNote className="w-[25px] h-[25px]" />
            <h1 className="font-semibold">Pending</h1>
          </div>
        </NavLink>

        <NavLink
          to="appointments/upcoming"
          className={(navClass) =>
            navClass.isActive ? setNavClass("upcoming") : null
          }
        >
          <div
            className={`flex items-center space-x-2   ${
              navClass == "upcoming"
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            } p-2 rounded-full cursor-pointer`}
          >
            <MdOutlineEventNote className="w-[25px] h-[25px]" />
            <h1 className="font-semibold">Upcoming</h1>
          </div>
        </NavLink>

        <NavLink
          to="appointments/past"
          className={(navClass) =>
            navClass.isActive ? setNavClass("past") : null
          }
        >
          <div
            className={`flex items-center space-x-2   ${
              navClass == "past"
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            } p-2 rounded-full cursor-pointer`}
          >
            <MdOutlineEventNote className="w-[25px] h-[25px]" />
            <h1 className="font-semibold">Examined</h1>
          </div>
        </NavLink>

        <NavLink
          to="appointments/all"
          className={(navClass) =>
            navClass.isActive ? setNavClass("all") : null
          }
        >
          <div
            className={`flex items-center space-x-2   ${
              navClass == "all"
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            } p-2 rounded-full cursor-pointer`}
          >
            <MdOutlineEventNote className="w-[25px] h-[25px]" />
            <h1 className="font-semibold">All</h1>
          </div>
        </NavLink>

        <hr className="border border-black" />

        <Label className="font-bold text-base text-gray-400 pl-2">
          My Slots
        </Label>

        <NavLink
          to="allslots"
          className={(navClass) =>
            navClass.isActive ? setNavClass("allslots") : null
          }
        >
          <div
            className={`flex items-center space-x-2   ${
              navClass == "allslots"
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            } p-2 rounded-full cursor-pointer`}
          >
            <TbReport className="w-[25px] h-[25px]" />
            <h1 className="font-semibold">All Slots</h1>
          </div>
        </NavLink>

        <NavLink
          to="addslots"
          className={(navClass) =>
            navClass.isActive ? setNavClass("addslots") : null
          }
        >
          <div
            className={`flex items-center space-x-2   ${
              navClass == "addslots"
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            } p-2 rounded-full cursor-pointer`}
          >
            <TbReport className="w-[25px] h-[25px]" />
            <h1 className="font-semibold">Add Slots</h1>
          </div>
        </NavLink>

      </div>

      <div className="border-r border-gray-500 h-full min-h-[500px] "></div>
      <div className="w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default TestProfile;
