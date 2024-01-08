import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiDashboard3Line } from "react-icons/ri";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import Dashboard from "./Dashboard";

const UserProfile = () => {
  return (
    <div className="mx-[180px] mt-[40px] min-h-[500px] flex justify-between">
      <div className="w-1/5 h-[500px] flex flex-col space-y-2">
        <div className="flex space-x-5 items-center my-[10px]">
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src="https://github.com/PrBr20.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="items-center">
            <h1 className="text-md">Protoy Barai</h1>
            <p className="text-[12px] text-gray-500">Eye Specialist</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 hover:bg-orange-500 hover:text-white p-2 rounded-full">
          <RiDashboard3Line className="w-[25px] h-[25px]" />
          <h1 className="font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-2 hover:bg-orange-500 hover:text-white p-2 rounded-full">
          <AiOutlineMedicineBox className="w-[25px] h-[25px]" />
          <h1 className="font-semibold">My Doctors</h1>
        </div>
        <div className="flex items-center space-x-2 hover:bg-orange-500 hover:text-white p-2 rounded-full">
          <MdOutlineEventNote className="w-[25px] h-[25px]" />
          <h1 className="font-semibold">My Appointments</h1>
        </div>
        <div className="flex items-center space-x-2 hover:bg-orange-500 hover:text-white p-2 rounded-full">
          <TbReport className="w-[25px] h-[25px]" />
          <h1 className="font-semibold">My Reports</h1>
        </div>
        <div className="flex items-center space-x-2 hover:bg-orange-500 hover:text-white p-2 rounded-full">
          <IoSettingsOutline className="w-[25px] h-[25px]" />
          <h1 className="font-semibold">Settings</h1>
        </div>
      </div>
      <div className="border-r border-gray-500 h-full min-h-[500px] "></div>
      <div className="w-3/4 h-10 ">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};

export default UserProfile;
