import React from "react";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/config";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { Badge } from "@/components/ui/badge";
import CategoryIcon from "@/assets/images/medcategory.svg";
import ShopIcon from "@/assets/images/shop.svg";
import DiseaseIcon from "@/assets/images/disease.svg";
import AvgStar from "@/assets/images/avgstar.png";
import { useNavigate } from "react-router-dom";

const AllMedicine = () => {
  const [medicines, setMedicines] = useState([]);

  const { state } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleViewClick = (med) => {
    navigate(`/medicine/${med._id}/overview`);
  };

  useEffect(() => {
    const fetchMedicines = async () => {
      const res = await fetch(
        `${BASE_URL}/medicine/search?manufacturer=${state.user._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      console.log(result);

      setMedicines(result.data);
    };

    fetchMedicines();
  }, []);

  return (
    <div className="flex-col space-y-5">
      <h1 className="font-bold text-3xl">All Medicines</h1>
      <hr className="border-black" />

      <div className="flex flex-row flex-wrap">
        {medicines.map((med, index) => (
          <div
            key={index}
            className="flex-col m-[5px] w-[290px] my-[10px] h-[270px] rounded-lg border border-slate-400 overflow-hidden"
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
                <img src={CategoryIcon} className="w-[20px] h-[20px]" alt="" />
                <p className="font-bold text-sm">{med.category}</p>
              </div>
              <div className="flex space-x-1">
                <img src={ShopIcon} className="w-[20px] h-[20px]" alt="" />
                <p className="font-bold text-xs pt-1">
                  {med.manufacturer.name}
                </p>
              </div>
              <div className="flex space-x-1">
                <img src={DiseaseIcon} className="w-[20px] h-[20px]" alt="" />
                <p className="font-bold text-xs pt-1">{med.disease}</p>
              </div>
              <hr className="border-gray-200" />
              <div className="flex items-center justify-between my-[10px]">
                <div className="flex space-x-1 items-center justify-between">
                  <img src={AvgStar} className="w-[25px] h-[25px]" alt="" />
                  <p className="font-bold pt-1 text-sm">
                    {med.avgStars.toFixed(2)}
                  </p>
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
  );
};

export default AllMedicine;
