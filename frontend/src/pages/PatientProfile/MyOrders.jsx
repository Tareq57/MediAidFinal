import React from "react";
import { useEffect, useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { BASE_URL } from "@/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CategoryIcon from "@/assets/images/category.svg";
import ShopIcon from "@/assets/images/shop.svg";
import DiseaseIcon from "@/assets/images/diseaseIcon.svg";

const MyOrders = () => {
  const [orders, setOrders] = useState(null);

  const { state, setState } = useContext(AuthContext);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(
        `${BASE_URL}/cart/fetchorders/${state.user._id}`,
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

      console.log(result.data);

      setOrders(result.data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex-col space-y-5">
      <h1 className="font-bold text-3xl">My Orders</h1>
      <hr className="border-black" />

      {orders
        ? orders.map((order) => (
            <div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold italic">
                  {new Date(order.createdAt.split("T")[0]).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>
                <p className="text-lg font-bold">{order.totalPrice} BDT</p>
              </div>
              {order.medicines.map((med, index) => (
                <div
                  key={index}
                  className="flex my-[10px] h-[150px] rounded-lg border border-slate-400 overflow-hidden"
                >
                  <div className="w-1/3 h-full">
                    <img
                      src={med.medicine.image}
                      alt="Doctor"
                      className="top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-[20px]">
                    <div className="flex justify-between">
                      <div className="flex-col w-2/3">
                        <h1 className="font-bold text-xl">
                          {med.medicine.name}
                        </h1>
                        <div className="flex space-x-1">
                          <img
                            src={CategoryIcon}
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="font-bold text-sm">
                            {med.medicine.category}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <img
                            src={ShopIcon}
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="font-bold text-xs pt-1">
                            {med.medicine.manufacturer.name}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <img
                            src={DiseaseIcon}
                            className="w-[20px] h-[20px]"
                            alt=""
                          />
                          <p className="font-bold text-xs pt-1">
                            {med.medicine.disease}
                          </p>
                        </div>
                      </div>

                      <div className="flex-col w-1/3 space-y-1">
                        
                        <div>
                          <h1 className="text-sm font-bold">
                            Unit : {med.unit}
                          </h1>
                          <h1 className="text-xs font-bold text-gray-400">
                            Base Price : {med.unitPrice} Taka
                          </h1>
                          <h1 className="text-xs font-bold">
                            Total Price :{" "}
                            {(
                              parseFloat(med.unitPrice) * parseInt(med.qty)
                            ).toFixed(2)}{" "}
                            Taka
                          </h1>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        : null}
    </div>
  );
};

export default MyOrders;
