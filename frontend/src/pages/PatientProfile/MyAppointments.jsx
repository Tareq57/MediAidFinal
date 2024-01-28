import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { BASE_URL } from "@/config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { state } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleAppointment = async (app) => {
    navigate("/prescription", { state: { app: app } });
  };

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

      <div className="flex space-x-10">
        {appointments.map((app, index) => (
          <div className="flex-col my-[10px] w-[300px] rounded-lg border border-slate-400 overflow-hidden">
            <div className="flex justify-center items-center">
              <img
                src={app.doctor.photo}
                className="h-[180px] w-[200px] aspect-square"
                alt=""
              />
            </div>
            <div className="flex-col space-y-1 p-5">
              <p className="font-bold text-xl">Doctor : {app.doctor.name}</p>
              <div>
                <p>Date : {app.slot.date.split("T")[0]}</p>
              </div>
              <div className="flex justify-between">
                <p>
                  Start : {app.slot.starthr}:{app.slot.startmin}
                </p>
                <p>
                  End : {app.slot.endhr}:{app.slot.endmin}
                </p>
              </div>
              <Button
                onClick={() => {
                  handleAppointment(app);
                }}
                className="w-full"
              >
                View Prescription
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
