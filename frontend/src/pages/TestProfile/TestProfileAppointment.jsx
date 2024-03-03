import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { BASE_URL } from "@/config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import uploadImagetoCloudinary from "@/utils/uploadCloudinary";
import { useToast } from "@/components/ui/use-toast";
import { set } from "lodash";

const TestProfileAppointment = () => {
  const [slots, setslots] = useState([]);
  const { state } = useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);

  const [finished, setFinished] = React.useState(false);

  const { id } = useParams();
  const { toast } = useToast();

  const { "*": group } = useParams();

  const navigate = useNavigate();
  const handleAppointment = async (app) => {
    navigate("/prescription", { state: { app: app } });
  };

  useEffect(() => {
    const fetchSlots = async () => {
      let curdate = new Date().toISOString().split("T")[0];
      const res = await fetch(
        `${BASE_URL}/labappt/test/${id}?date=${curdate}&group=${group}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }
      );

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      setslots(result.data);
    };

    if (state.user && state.role == "lab") {
      fetchSlots();
    }
  }, [group, finished]);

  console.log(slots);

  const handleUploadReport = async (app) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf"; // specify the accepted file types
    input.onchange = async (event) => {
      const file = event.target.files[0];
      // handle the file upload logic here
      console.log(file);

      setLoading(true);
      const data = await uploadImagetoCloudinary(file);
      setLoading(false);

      toast({
        title: "Image Uploaded Successfully",
        description: "Image upload done, you can now sign up",
      });

      console.log(data.url);
      console.log(app);

      const res = await fetch(`${BASE_URL}/labappt/report/${app._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
        body: JSON.stringify({ report: data.url }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      console.log(result);

      setFinished(!finished);
    };
    input.click();

    navigate("");
  };

  const handleDownloadReport = async (app) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf"; // specify the accepted file types
    input.onchange = async (event) => {
      const file = event.target.files[0];
      // handle the file upload logic here
      console.log(file);

      setLoading(true);
      const data = await uploadImagetoCloudinary(file);
      setLoading(false);

      toast({
        title: "Image Uploaded Successfully",
        description: "Image upload done, you can now sign up",
      });

      console.log(data.url);
      console.log(app);

      const res = await fetch(`${BASE_URL}/labappt/report/${app._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
        body: JSON.stringify({ report: data.url }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      console.log(result);

      setFinished(!finished);
    };
    input.click();

    navigate("");
  };

  return (
    <div className="flex-col space-y-5">
      <h1 className="font-bold text-3xl">Appointments</h1>
      <hr className="border-black" />

      {state.role == "lab" &&
        slots.map((slot) => (
          <div>
            <h1 className="text-lg font-bold italic">
              {new Date(slot.date.split("T")[0]).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h1>
            <h1 className="text-sm font-bold italic">
              From : {slot.starthr}:{slot.startmin} &nbsp;&nbsp; To :{" "}
              {slot.endhr}:{slot.endmin}
            </h1>
            <div className="flex flex-row flex-wrap">
              {slot.appointments.map((app, index) => (
                <div className="flex-col m-[10px] w-[230px] rounded-lg border border-slate-400 overflow-hidden">
                  <div className="flex justify-center items-center">
                    <img
                      src={
                        state.role == "lab" ? app.user.photo : app.user.photo
                      }
                      className="h-[100px] w-[100px] aspect-square"
                      alt=""
                    />
                  </div>
                  <div className="flex-col space-y-1 p-3">
                    <p className="font-bold text-base text-center">
                      {state.role === "lab" ? app.user.name : app.user.name}
                    </p>
                    <p className="font-bold text-base text-center">
                      {state.role === "lab" ? `Serial : ${app.serial}` : null}
                    </p>
                    <div>
                      {/* <p className="text-sm">Date : {app.slot.date.split("T")[0]}</p> */}
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">
                        {/* Start : {app.slot.starthr}:{app.slot.startmin} */}
                      </p>
                      <p className="text-sm">
                        {/* End : {app.slot.endhr}:{app.slot.endmin} */}
                      </p>
                    </div>
                    {group == "current" &&
                      app.status !=
                        "finished" && (
                          <div className="flex-col">
                            <p className="text-center">Status : Not Finished</p>
                            <Button
                              onClick={() => handleUploadReport(app)}
                              className="w-full"
                            >
                              Upload Report
                            </Button>
                          </div>
                        )}

                    {group == "current" &&
                      app.status ==
                        "finished" && (
                          <div className="flex-col">
                            <p className="text-center">Status : Finished</p>
                            <Button
                              onClick={() => handleDownloadReport(app)}
                              className="w-full"
                            >
                              Download Report
                            </Button>
                          </div>
                        )}

                    {group == "upcoming" && null}

                    {group == "past" && (
                      <Button
                        onClick={() => {
                          handleAppointment(app);
                        }}
                        className="w-full"
                      >
                        View Prescription
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default TestProfileAppointment;
