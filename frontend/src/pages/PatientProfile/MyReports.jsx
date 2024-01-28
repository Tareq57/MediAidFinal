import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { BASE_URL } from "@/config";

const MyReports = () => {
  const { state } = useContext(AuthContext);

  const [appointments, setAppointments] = useState(null); 

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await fetch(`${BASE_URL}/appointment`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      
      console.log(result);

      setAppointments(result.appointments);
    };

    if(state.user != null) {
      fetchAppointments();
    }

  }, []);
  
  return (
    <div className="flex-col space-y-5">
      <h1 className="font-bold text-3xl">My Reports</h1>
      <hr className="border-black" />
    </div>
  )
}

export default MyReports