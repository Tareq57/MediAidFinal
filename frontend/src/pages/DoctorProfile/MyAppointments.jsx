import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { BASE_URL } from "@/config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await fetch(`${BASE_URL}/appointment`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });

      if (!res.ok) {
        throw new Error(result.message);
      }
      const result = await res.json();

      setAppointments(result.appointments);

      console.log(result.appointments);
    };

    if (state.user) {
      fetchAppointments();
    }
  }, []);

  return (
    <div className="flex-col space-y-5">
      <h1 className="font-bold text-3xl">Appointments</h1>
      <hr className="border-black" />

      <div className="flex ">
        {appointments.map((app, index) => (
          <div className="flex-col my-[10px] rounded-lg border border-slate-400 overflow-hidden">
            {/* <div className="h-[200px] w-[200px]"> */}
            <Avatar className="w-[50px] h-[50px] border border-outlined">
              <AvatarImage src={app.user.photo} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* </div> */}
            <div>
              <p>
                start time : {app.slot.starthr}:{app.slot.startmin}
              </p>
              <p>
                end time : {app.slot.endhr}:{app.slot.endmin}
              </p>
            </div>
            <Link to={`/prescription`}>
              <Button>Start Appointment</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
