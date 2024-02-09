import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { BASE_URL } from "@/config";
import AvgStar from "@/assets/images/avgstar.png";
import { Badge } from "@/components/ui/badge";
import CategoryIcon from "@/assets/images/category.svg";
import ShopIcon from "@/assets/images/shop.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BlueIcon from "@/assets/images/blue_icon.svg";
import { Checkbox } from "@/components/ui/checkbox";

const MediShop = () => {
  const { state, setState } = useContext(AuthContext);
  // console.log(state);

  // const [specialization, setSpecialization] = useState([]);

  const [medicines, setMedicines] = useState([]);

  const [appointments, setAppointments] = useState([]);

  const [addedappointments, setAddedAppointments] = useState([]);

  const [search, setSearch] = useState({
    name: "",
    rating: 0,
    feeLower: 0,
    feeUpper: 1000,
    specialization: "all",
    timerange: "all",
  });

  const handleViewClick = (med) => {
    console.log(med);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      // let params = {};

      // // Conditionally add parameters to the object
      // if (search.name != "") params.name = search.name;
      // if (search.rating) params.rating = search.rating;
      // if (search.feeLower > -1) params.feeLower = search.feeLower;
      // if (search.feeUpper) params.feeUpper = search.feeUpper;
      // if (search.specialization != "all")
      //   params.specialization = search.specialization;
      // if (search.timerange != "all") params.timerange = search.timerange;

      // const queryString = new URLSearchParams(params).toString();

      // const res1 = await fetch(`${BASE_URL}/medishop/search?${queryString}`, {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${state.token}`,
      //   },
      // });

      // console.log(queryString);

      const res1 = await fetch(`${BASE_URL}/medicine/search`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });

      if (!res1.ok) {
        throw new Error(result1.message);
      }

      const result1 = await res1.json();

      // console.log(result1.data);
      setMedicines(result1.data);
    };

    if (state.user) {
      fetchDoctors();
    }
  }, [search]);

  console.log(addedappointments);

  useEffect(() => {
    const fetchAppointments = async () => {
      const res1 = await fetch(`${BASE_URL}/appointment`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });

      if (!res1.ok) {
        throw new Error(result1.message);
      }

      const result1 = await res1.json();

      console.log(result1);
      setAppointments(result1.appointments);
      // setMedicines(result1.data);
    };

    if (state.user) {
      fetchAppointments();
    }
  }, []);

  return (
    <div className="mx-[180px] mt-[40px] flex space-x-10">
      <div className="w-1/5 flex-col space-y-2">
        <h1 className="text-lg font-bold">Prescription Corner</h1>
        <hr className="border border-black" />
        <div className="flex space-x-2 mt-5">
          {appointments.map(
            (app, index) =>
              addedappointments.includes(app._id) && (
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{app.doctor.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {new Date(app.slot.date).toUTCString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex-col space-y-2">
                      {app.prescription.prescribedMeds.map((med, index) => (
                        <div className="flex items-center space-x-2">
                          <Checkbox />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {med.medicineName}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className="w-full"
                      onClick={() => {
                        setAddedAppointments((prevAppointments) =>
                          prevAppointments.filter(
                            (appointment) => appointment !== app._id
                          )
                        );
                      }}
                    >
                      Remove Prescription
                    </Button>
                  </CardFooter>
                </Card>
              )
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            {addedappointments.length == 0 && (
              <Button className="w-full">View Prescription</Button>
            )}
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>All Prescriptions</SheetTitle>
              <SheetDescription>
                Click Add to search for the medicines
              </SheetDescription>
            </SheetHeader>
            <div className="flex space-x-2 mt-5">
              {appointments.map(
                (app, index) =>
                  addedappointments.includes(app._id) == false && (
                    <Card className="w-full">
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {app.doctor.name}
                        </CardTitle>
                        <CardDescription className="text-xs">
                          {new Date(app.slot.date).toUTCString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-row flex-wrap space-x-3">
                          {app.prescription.prescribedMeds.map((med, index) => (
                            <div className="flex">
                              <img
                                src={BlueIcon}
                                className="w-[20px] h-[20px]"
                                alt=""
                              />
                              <p className="text-sm">{med.medicineName}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          type="submit"
                          className="w-full"
                          onClick={() => {
                            setAddedAppointments([
                              ...addedappointments,
                              app._id,
                            ]);
                          }}
                        >
                          Add Prescription
                        </Button>
                      </CardFooter>
                    </Card>
                  )
              )}
            </div>
            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex flex-col w-3/5">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl text">All Medicine</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Search by name"
              value={search.name}
              onChange={(e) => handleChange("name", e.target.value)}
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

        <div className="flex flex-row flex-wrap">
          {medicines.map((med, index) => (
            <div
              key={index}
              className="flex-col m-[5px] w-[290px] my-[10px] h-[250px] rounded-lg border border-slate-400 overflow-hidden"
            >
              <div className=" h-[120px]">
                <img
                  src={med.image}
                  alt="medicine"
                  className="top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex-col p-[15px]">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text">{med.name}</h1>
                  <Badge>{med.type}</Badge>
                </div>
                <div className="flex space-x-1">
                  <img
                    src={CategoryIcon}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <p className="font-bold text-sm">{med.category}</p>
                </div>
                <div className="flex space-x-1">
                  <img src={ShopIcon} className="w-[20px] h-[20px]" alt="" />
                  <p className="font-bold text-xs pt-1">{med.manufacturer}</p>
                </div>
                <hr className="border-gray-200" />
                <div className="flex items-center justify-between my-[10px]">
                  <div className="flex space-x-1 items-center justify-between">
                    <img src={AvgStar} className="w-[25px] h-[25px]" alt="" />
                    <p className="font-bold pt-1 text-sm">5.00</p>
                  </div>
                  <h1
                    className="font-bold hover:scale-110 transition-transform cursor-pointer"
                    onClick={() => handleViewClick(med)}
                  >
                    view more
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col w-1/3 container space-y-4">
        <h1 className="font-bold text-lg">Specialization</h1>
        <RadioGroup
        defaultValue="comfortable"
          value={search.specialization}
          onValueChange={(value) => handleChange("specialization", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={"all"} id="r1" />
            <Label htmlFor="r1">All</Label>
          </div>
          {specialization.map((sp, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={sp._id} id="r1" />
              <Label htmlFor="r1">{sp.name}</Label>
            </div>
          ))}
        </RadioGroup>

        <h1 className="font-bold text-lg">Slot Availability</h1>

        <RadioGroup
          defaultValue="comfortable"
          value={search.timerange}
          onValueChange={(value) => handleChange("timerange", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="r1" />
            <Label htmlFor="r1">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="today" id="r2" />
            <Label htmlFor="r2">Today</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="week" id="r3" />
            <Label htmlFor="r3">This week</Label>
          </div>
        </RadioGroup>

        <h1 className="font-bold text-lg">Fee</h1>

        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-lg">
            {search.feeLower}-{search.feeUpper}
          </h1>

          <Slider
            min={0}
            max={1000}
            value={[search.feeUpper]}
            className="w-[200px]"
            step={100}
            onValueChange={(value) => {
              setSearch({
                ...search,
                feeUpper: value[0],
              });
            }}
          />
        </div>



        <h1 className="font-bold text-lg">Review</h1>

        <RadioGroup
          defaultValue="comfortable"
          value={search.rating.toString()}
          onValueChange={(value) => handleChange("rating", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5" id="r1" />
            <Label htmlFor="r1">5 star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="r2" />
            <Label htmlFor="r2">4+ star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="r3" />
            <Label htmlFor="r3">3+ star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="r3" />
            <Label htmlFor="r3">2+ star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="r3" />
            <Label htmlFor="r3">1+ star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0" id="r3" />
            <Label htmlFor="r3">None</Label>
          </div>
        </RadioGroup>

        
      </div> */}
    </div>
  );
};

export default MediShop;
