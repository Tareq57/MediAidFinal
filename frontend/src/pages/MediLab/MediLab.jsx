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
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { set } from "date-fns";
import Loader from "@/assets/gifs/page_loader.json";
import Lottie from "react-lottie";
import DiseaseIcon from "@/assets/images/diseaseIcon.svg";
import { Slider } from "@/components/ui/slider";

const MediLab = () => {
  const { state, setState } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [tests, setTests] = useState([]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();

  const [search, setSearch] = useState({
    value: "",
    searchBy: "any",
    rating: "0",
    feeLower: 0,
    feeUpper: 10000,
  });

  const handleViewClick = (test) => {
    navigate(`/test/${test._id}`);
  };

  const handleChange = (key, value) => {
    setSearch((prevSearch) => ({ ...prevSearch, [key]: value }));
  };

  const handleCheckboxChange = (isTrue, value) => {
    if (!isTrue)
      setSelectedMed((prevMed) => prevMed.filter((med) => med !== value));
    else setSelectedMed((prevMed) => [...prevMed, value]);
  };

  useEffect(() => {
    const fetchMedicines = async () => {
      let params = {};

      if (search.searchBy == "location" && search.value != "")
        params.location = search.value;
      else if (search.searchBy == "name" && search.value != "")
        params.name = search.value;
      if (search.rating) params.rating = search.rating;
      if (search.feeLower >= 1) params.feelower = search.feeLower;
      if (search.feeUpper) params.feeupper = search.feeUpper;

      const queryString = new URLSearchParams(params).toString();

      setLoading(true);

      console.log(queryString);

      const res1 = await fetch(`${BASE_URL}/test/search?${queryString}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });

      setLoading(false);

      const result1 = await res1.json();

      if (!res1.ok) {
        throw new Error(result1.message);
      }

      console.log(result1);

      setTests(result1.data);
    };

    if (state.user) {
      fetchMedicines();
    }
  }, [search]);

  return (
    <div className="mx-[140px] mt-[40px] flex space-x-10 justify-between">
      <div className="flex flex-col w-4/5 min-h-[500px]">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl text">All Tests</h1>

          <div className="flex">
            <input
              type="text"
              placeholder={`Search by ${search.searchBy}`}
              value={search.value}
              onChange={(e) => handleChange("value", e.target.value)}
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

        {loading && (
          <div className="flex justify-center items-center">
            {" "}
            <Lottie options={defaultOptions} height={50} width={50} />{" "}
          </div>
        )}

        <div className="flex flex-row flex-wrap">
          {tests.map((test, index) => (
            <div
              key={index}
              className="flex-col m-[5px] w-[250px] my-[10px] h-[320px] rounded-lg border border-slate-400 overflow-hidden"
            >
              <div className=" h-[120px]">
                <img
                  src={test.photo}
                  alt="medicine"
                  className="top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex-col p-[15px]">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text">{test.name}</h1>
                </div>
                <div className="flex space-x-1">
                  <img
                    src={CategoryIcon}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <p className="font-bold text-sm">
                    {test.patientCount} patients
                  </p>
                </div>
                <div className="flex space-x-1">
                  <img
                    src={CategoryIcon}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <p className="font-bold text-sm">{test.location}</p>
                </div>
                <div className="flex space-x-1">
                  <img
                    src={CategoryIcon}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <p className="font-bold text-sm">{test.price} BDT</p>
                </div>
                <div className="flex space-x-1">
                  <img src={ShopIcon} className="w-[20px] h-[20px]" alt="" />
                  <p className="font-bold text-xs pt-1">{test.lab.name}</p>
                </div>

                <hr className="border-gray-200" />
                <div className="flex items-center justify-between my-[10px]">
                  <div className="flex space-x-1 items-center justify-between">
                    <img src={AvgStar} className="w-[25px] h-[25px]" alt="" />
                    <p className="font-bold pt-1 text-sm">
                      {test.avgStars.toFixed(2)}
                    </p>
                  </div>
                  <h1
                    className="font-bold hover:scale-110 transition-transform cursor-pointer"
                    onClick={() => handleViewClick(test)}
                  >
                    view more
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-1/5 container space-y-4">
        <h1 className="font-bold text-lg">Search Type</h1>
        <RadioGroup
          defaultValue="any"
          value={search.searchBy}
          onValueChange={(value) => handleChange("searchBy", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={"any"} id="r1" />
            <Label htmlFor="r1">Any</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={"name"} id="r1" />
            <Label htmlFor="r1">Name</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={"location"} id="r1" />
            <Label htmlFor="r1">Location</Label>
          </div>
        </RadioGroup>

        <h1 className="font-bold text-lg">Fee</h1>

        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-lg">
            {search.feeLower}-{search.feeUpper}
          </h1>

          <Slider
            min={0}
            max={10000}
            value={[search.feeUpper]}
            className="w-[200px]"
            step={1000}
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
      </div>

      <div></div>
    </div>
  );
};

export default MediLab;
