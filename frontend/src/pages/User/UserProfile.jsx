import React, { useState } from "react";

import Dashboard from "./Dashboard";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import MyDoctors from "./MyDoctors";
import MyReports from "./MyReports";
import Settings from "./Settings";
import MyAppointments from "./MyAppointments";
import DoctorSideBar from "../DoctorProfile/DoctorSideBar";
import PatientSideBar from "../PatientProfile/PatientSideBar";

const UserProfile = () => {
  const { state } = useContext(AuthContext);

  const [navClass, setNavClass] = useState("DashBoard");

  const handleClick = (e) => {
      if (e.currentTarget.id == "Dash") setNavClass("DashBoard");
      else if (e.currentTarget.id == "Docs") setNavClass("Doctors");
      // else if (e.currentTarget.id == "Medis") setNavClass("MediShop");
      else if (e.currentTarget.id == "Appoints") setNavClass("Appointments");
      else if (e.currentTarget.id == "Reps") setNavClass("Reports");
      else if (e.currentTarget.id == "Sets") setNavClass("Settings");
  };

  console.log(state?.role);

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

        {navClass == "Doctors" && <MyDoctors></MyDoctors>}

        {navClass == "Appointments" && <MyAppointments></MyAppointments>}

        {navClass == "Reports" && <MyReports></MyReports>}

        {navClass == "Settings" && <Settings></Settings>}

        {navClass == "Settings" && <Settings></Settings>}

        {navClass == "Settings" && <Settings></Settings>}

        {navClass == "Settings" && <Settings></Settings>}
      </div>
    </div>
  );
};

export default UserProfile;
