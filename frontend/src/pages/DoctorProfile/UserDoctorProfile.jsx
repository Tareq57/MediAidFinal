import React, { useState } from "react";
import Dashboard from "./Dashboard";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import Settings from "./Settings";
import DoctorSideBar from "./DoctorSideBar";
import PatientSideBar from "../PatientProfile/PatientSideBar";
import MySlots from "./MySlots";
import MyPatients from "./MyPatients";
import MyAppointments from "./MyAppointments";

const UserProfile = () => {
  const { state } = useContext(AuthContext);

  const [navClass, setNavClass] = useState("DashBoard");

  const handleClick = (e) => {
    if (e.currentTarget.id == "Dash") setNavClass("DashBoard");
    else if (e.currentTarget.id == "Pats") setNavClass("Patients");
    else if (e.currentTarget.id == "Appoints") setNavClass("Appointments");
    else if (e.currentTarget.id == "Slots") setNavClass("Slots");
    else if (e.currentTarget.id == "Sets") setNavClass("Settings");
  };

  return (
    <div className="mx-[180px] mt-[40px] min-h-[500px] flex justify-between">
      {state?.role == "patient" && (
        <PatientSideBar handleClick={handleClick}></PatientSideBar>
      )}
      {state?.role == "doctor" && (
        <DoctorSideBar handleClick={handleClick}></DoctorSideBar>
      )}
      <div className="border-r border-gray-500 h-full min-h-[500px] "></div>
      <div className="w-3/4">
        {navClass == "DashBoard" && <Dashboard></Dashboard>}

        {navClass == "Patients" && <MyPatients></MyPatients>}

        {navClass == "Appointments" && <MyAppointments></MyAppointments>}

        {navClass == "Slots" && <MySlots></MySlots>}

        {navClass == "Settings" && <Settings></Settings>}
      </div>
    </div>
  );
};

export default UserProfile;
