import React, { useEffect, useState } from "react";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { BASE_URL } from "@/config";
import AvgStar from "@/assets/images/avgstar.png";
import { useParams } from "react-router-dom";
import CategoryIcon from "@/assets/images/category.svg";
import ShopIcon from "@/assets/images/shop.svg";
import { Link } from 'react-router-dom';

const MediAlltests = () => {
  const [loading, setLoading] = useState(false);
  const { state, setState } = useContext(AuthContext);
  const { id } = useParams();
  console.log(id);

  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      let params = {};

      const res1 = await fetch(
        `${BASE_URL}/test/search?labid=${state.user._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }
      );

      if (!res1.ok) {
        throw new Error(result1.message);
      }

      const result1 = await res1.json();

      console.log(result1.data);

      setTests(result1.data);
    };

    if (state.user) {
      fetchTests();
    }
  }, []);

  console.log(tests);

  return (
    <div className="flex-col space-y-5">
      <h1 className="font-bold text-3xl">All Tests</h1>
      <hr className="border-black" />

      <div className="flex flex-row flex-wrap">
        {tests.map((test, index) => (
          <div
            key={index}
            className="flex-col m-[5px] w-[240px] my-[10px] h-[270px] rounded-lg border border-slate-400 overflow-hidden"
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
                <img src={CategoryIcon} className="w-[20px] h-[20px]" alt="" />
                <p className="font-bold text-sm">
                  {test.patientCount} patients
                </p>
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
                <Link to={`/testprofile/${test._id}`}>
                  <h1
                    className="font-bold hover:scale-110 transition-transform cursor-pointer"
                    onClick={() => handleViewClick(med)}
                  >
                    test profile
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediAlltests;
