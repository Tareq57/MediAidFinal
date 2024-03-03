import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { PiClockCountdownFill } from "react-icons/pi";
import { TbCalendarStats } from "react-icons/tb";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { BASE_URL } from "@/config";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { set } from "date-fns";
import AvgStar from "@/assets/images/avgstar.png";
import { useParams } from "react-router-dom";

const MediAlltests = () => {
  const [loading, setLoading] = useState(false);
  const { state, setState } = useContext(AuthContext);
  const { id } = useParams();
  console.log(id);

  const [tests, setTests] = useState([]);

  const [search, setSearch] = useState({
    name: "",
    rating: 0,
    price: 0,
  });

  useEffect(() => {
    const fetchTests = async () => {
      let params = {};

      // Conditionally add parameters to the object
      if (search.name != "") params.name = search.name;
      params.mediLabId = id;

      const queryString = new URLSearchParams(params).toString();

      const res1 = await fetch(
        `${BASE_URL}/mediLab/tests/search?${queryString}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      console.log(queryString);

      if (!res1.ok) {
        throw new Error(result1.message);
      }

      // const result2 = await res2.json();
      const result1 = await res1.json();

      console.log(result1.data);

      setTests(result1.data);
      // setSpecialization(result2.data);
    };

    if (state.user) {
      fetchTests();
    }
  }, [search]);

  const handleChange = (name, value) => {
    if (name == "feeUpper") {
      setSearch({ ...search, feeLower: 0 });
      setSearch({ ...search, [name]: value[0] });
    } else setSearch({ ...search, [name]: value });
  };
  console.log(search);

  return (
    <div className="flex-col space-y-5">
      <h1 className="font-bold text-3xl">All Tests</h1>
      <hr className="border-black" />


    </div>
  );
};

export default MediAlltests;
