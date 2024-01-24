import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "@/config";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { PiClockCountdownFill } from "react-icons/pi";
import { TbCalendarStats } from "react-icons/tb";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import Qualification from "@/components/DoctorDetails/Qualification";
import Reviews from "@/components/DoctorDetails/Reviews";
import Appointment from "./Appointment";

const DoctorDetails = () => {
  const { id } = useParams();

  const { state } = useContext(AuthContext);

  const [doctor, setDoctor] = useState(null);

  const [navClass, setNavClass] = useState("Qualification");

  const handleclick = (e) => {
    if (e.target.id == "Qual") setNavClass("Qualification");
    else if (e.target.id == "Rev") setNavClass("Reviews");
  };

  useEffect(() => {
    const fetchDoctor = async () => {
      const res = await fetch(`${BASE_URL}/doctor/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });

      // if (!res.ok) {
      //   throw new Error(result.message);
      // }

      const result = await res.json();

      setDoctor(result.data);
    };
    fetchDoctor();
  }, []);

  return (
    doctor != null && (
      <div className="flex mx-[180px] mt-[40px] space-x-10">
        <div className="w-2/3 flex-col space-y-5">
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <div className="flex my-[10px]">
            <div className="flex mr-[10px]">
              <PiClockCountdownFill className="text-orange-400 " />
              <p className="text-xs"> {doctor.patients} Patients</p>
            </div>
            <div className="flex mx-[10px]">
              <TbCalendarStats className="text-orange-400 " />
              <p className="text-xs"> {doctor.days} </p>
            </div>
            <div className="flex mx-[10px]">
              <TbDeviceWatchStats2 className="text-orange-400 " />
              <p className="text-xs"> {doctor.slots}</p>
            </div>
          </div>
          <div className="border border-black rounded-xl overflow-hidden justify-center flex">
            <img src={doctor.photo} alt="" />
          </div>
          <div className="navigation">
            <ul className="menu flex items-center">
              <li
                id="Qual"
                className={`menu-item p-[10px] rounded-t-lg hover:cursor-pointer ${
                  navClass == "Qualification" ? "bg-orange-300" : ""
                }`}
                onClick={handleclick}
              >
                Qualification
              </li>
              <li
                id="Rev"
                className={`menu-item p-[10px] rounded-t-lg hover:cursor-pointer ${
                  navClass == "Reviews" ? "bg-orange-300" : ""
                }`}
                onClick={handleclick}
              >
                Reviews
              </li>
            </ul>
            <hr className="border-black" />
          </div>
          <div>
            {
              navClass == "Qualification" && <Qualification qualifs = {doctor.qualifications}/>
            }
            {
              navClass == "Reviews" && <Reviews revs = {doctor.reviews}/>
            }
          </div>
        </div>
        <div className="w-1/3 ">
          <Appointment></Appointment>
        </div>
      </div>
    )
  );
};

export default DoctorDetails;
