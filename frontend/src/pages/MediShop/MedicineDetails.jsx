import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import StarIcon from "@/assets/images/avgstar.png";
import ReviewIcon from "@/assets/images/reviews.png";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { MyContext } from "@/context/MyContext";
import { BASE_URL } from "@/config";
import MedCat from "@/assets/images/medcategory.svg";
import Disease from "@/assets/images/disease.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { set } from "lodash";
import { useToast } from "@/components/ui/use-toast"

const MedicineDetails = () => {
  const { medid } = useParams();

  const {toast} = useToast();
  // console.log(medid);

  const { state, setState} = useContext(AuthContext);

  const [navClass, setNavClass] = useState("overview");

  const [medicine, setMedicine] = useState(null);

  const [review, setReview] = useState(null);

  const [cartItem, setCartItem] = useState({
    medicineId: medid,
    unit: "",
    unitPrice: "",
    qty: "1",
  });

  console.log(cartItem);

  useEffect(() => {
    const fetchMedicine = async () => {
      const res = await fetch(`${BASE_URL}/medicine/fetchone/${medid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });

      const result1 = await res.json();

      if (!res.ok) {
        throw new Error(result1.message);
      }

      setMedicine(result1.data);

      setCartItem({
        ...cartItem,
        medicineId: result1.data._id,
        unit: result1.data.prices[0].unit,
        unitPrice: result1.data.prices[0].amount,
      });
    };
    if (state.user) {
      fetchMedicine();
    }
  }, []);

  const handleAddCart = async () => {
    const res = await fetch(`${BASE_URL}/cart/modify/${state.user._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      }, 
      body: JSON.stringify(cartItem),
    });

    const result = await res.json();

    if (!res.ok) {
      toast({
        title: "Medicine not added to cart",
        description: "Try again",
      });
      throw new Error(result.message);
    }
    else {
      toast({
        title: "Added to cart",
        description: "You can view your cart in your profile",
      });
    }

    setState({...state, cartSize: result.data.medicines.length})

    console.log(result);
  };

  return (
    medicine && (
      <div className="flex-col mx-[180px] mt-[40px] space-x-10">
        <div className="h-[220px] bg-black w-full relative p-10 rounded-lg">
          <div className="flex w-1/2 justify-between">
            <p className="font-bold text-3xl text-white">{medicine.name}</p>
            <div className="mt-2">
              <Badge variant="secondary">{medicine.type}</Badge>
            </div>
          </div>

          <div className="flex space-x-1">
            <img src={MedCat} className="w-[25px] h-[25px]" alt="" />
            <p className="text-white font-bold text-lg">{medicine.category}</p>
          </div>

          <div className="flex space-x-1">
            <img src={Disease} className="w-[25px] h-[25px]" alt="" />
            <p className="text-white font-bold text-lg">{medicine.disease}</p>
          </div>

          <div className="flex space-x-5 mt-[5px]">
            <div className="flex space-x-1 items-center justify-center">
              <img src={StarIcon} className="w-[25px] h-[25px]" alt="" />
              <p className="text-white text-sm font-bold">
                {medicine.avgStars.toFixed(2)}
              </p>
            </div>
            <div className="flex space-x-1">
              <img src={ReviewIcon} className="w-[25px] h-[25px]" alt="" />
              <p className="text-white text-sm pt-[2px] font-bold">
                {medicine.reviewCount} reviews
              </p>
            </div>
          </div>

          <div>
            <p className="text-white font-bold">{medicine.manufacturer.name}</p>
          </div>
        </div>
        <div className="w-[400px] absolute right-[220px] top-[150px] rounded-2xl overflow-hidden">
          <img src={medicine.image} className="" alt="" />
          <div className="flex-col space-y-2 p-5">
            <p className="text-lg font-bold ">
              Best Price :{" "}
              {(parseInt(cartItem.qty) * parseFloat(cartItem.unitPrice)).toFixed(2)} Taka
            </p>
            <Select
              onValueChange={(value) => {
                console.log(value);
                for (let i = 0; i < medicine.prices.length; i++) {
                  if (medicine.prices[i].unit == value) {
                    setCartItem({
                      ...cartItem,
                      unit: medicine.prices[i].unit,
                      unitPrice: medicine.prices[i].amount,
                    });
                    break;
                  }
                }
              }}
              // defaultValue={price.unit}
              value={cartItem.unit}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Unit" />
              </SelectTrigger>
              <SelectContent>
                {medicine.prices.map((price, index) => (
                  <SelectItem value={price.unit}>{price.unit}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex space-x-2">
              <div className="w-1/3">
                <Button
                  className="text-2xl w-full"
                  onClick={() => {
                    if (parseInt(cartItem.qty) > 1) {
                      setCartItem({
                        ...cartItem,
                        qty: (parseInt(cartItem.qty) - 1).toString(),
                      });
                    }
                  }}
                >
                  -
                </Button>
              </div>
              <div className="w-1/3">
                <p className="text-xl text-center p-2">{cartItem.qty}</p>
              </div>
              <div className="w-1/3">
                <Button
                  className="text-2xl w-full"
                  onClick={() => {
                    setCartItem({
                      ...cartItem,
                      qty: (parseInt(cartItem.qty) + 1).toString(),
                    });
                  }}
                >
                  +
                </Button>
              </div>
            </div>
            <Button className="w-full" onClick={handleAddCart}>Add to Cart</Button>
          </div>
        </div>

        <div className="flex space-x-2 mt-5">
          <NavLink
            to="overview"
            className={(navClass) =>
              navClass.isActive ? setNavClass("overview") : null
            }
          >
            <div
              className={`flex items-center space-x-2   ${
                navClass == "overview"
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-100"
              } px-2 rounded-full cursor-pointer`}
            >
              <h1 className="font-semibold">Overview</h1>
            </div>
          </NavLink>
          <NavLink
            to="reviews"
            className={(navClass) =>
              navClass.isActive ? setNavClass("reviews") : null
            }
          >
            <div
              className={`flex items-center space-x-2   ${
                navClass == "reviews"
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-100"
              } px-2 rounded-full cursor-pointer`}
            >
              <h1 className="font-semibold">Reviews </h1>
            </div>
          </NavLink>
        </div>
        <hr className="border border-black mt-2 w-1/2" />
        <div className="w-1/2">
          <MyContext.Provider value={medicine}>
            <Outlet />
          </MyContext.Provider>
        </div>
      </div>
    )
  );
};

export default MedicineDetails;
