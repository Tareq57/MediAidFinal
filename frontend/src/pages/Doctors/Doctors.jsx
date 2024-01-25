import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { PiClockCountdownFill } from "react-icons/pi";
import { TbCalendarStats } from "react-icons/tb";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import doctorCardImage from "@/assets/images/doctor_card_img.jpg";

import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { BASE_URL } from "@/config";
import { Link } from "react-router-dom";

const Doctors = () => {
  const { state, setState } = useContext(AuthContext);
  // console.log(state);

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await fetch(`${BASE_URL}/doctor/search`, {
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

      console.log(result.data);

      setDoctors(result.data);
    };

    if (state.user) {
      fetchDoctors();
    }
  }, []);

  return (
    <div className="mx-[180px] mt-[40px] flex">
      <div className="flex flex-col w-2/3">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">All Doctors</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Search name, specialization"
              className="border-b-2 border-black focus:outline-none w-[300px]"
            />
            <Button
              size="icon"
              className="rounded-full bg-orange-500 hover:bg-orange-600"
            >
              <FaSearch />
            </Button>
          </div>
        </div>

        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex my-[10px] h-[150px] rounded-lg border border-slate-400 overflow-hidden"
          >
            <div className="w-1/3 h-full">
              <img
                src={doctor.photo}
                alt="Doctor"
                className="top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-2/3 p-[20px]">
              <h1 className="font-bold text-gray-400">{doctor.name}</h1>
              <h1 className="font-bold text-xl">{doctor.specialty}</h1>
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
              <hr className="border-gray-200" />
              <div className="flex justify-between my-[10px]">
                <h1 className="text-red-500 font-extrabold ">Fee : 500 Taka</h1>
                <h1 className="font-bold hover:scale-110 transition-transform">
                  <Link to={`/doctors/${doctor._id}`}>view more</Link>
                </h1>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="my-[10px]">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="hover:bg-black hover:text-white"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="hover:bg-black hover:text-white"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="hover:bg-black hover:text-white"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  className="hover:bg-black hover:text-white"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div> */}
      </div>

      <div className="flex flex-col w-1/3 container space-y-4">
        <h1 className="font-bold text-lg">Doctor Catagory</h1>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
        </div>

        <h1 className="font-bold text-lg">Slot Availability</h1>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
        </div>

        <h1 className="font-bold text-lg">Fee</h1>

        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-lg">100-500</h1>

          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-[200px]"
          />
        </div>

        <h1 className="font-bold text-lg">Review</h1>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
