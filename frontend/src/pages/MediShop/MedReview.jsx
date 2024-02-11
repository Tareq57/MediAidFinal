import React from "react";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "@/context/MyContext";
import AuthContext from "@/context/AuthContext";
import { useParams } from "react-router-dom";
import { BASE_URL } from "@/config";

const MedReview = () => {
  const med = useContext(MyContext);

  const { medid } = useParams();

  console.log(medid);

  const { state } = useContext(AuthContext);

    useEffect(() => {
      const fetchReviews = async () => {
        const res1 = await fetch(`${BASE_URL}/medicine/review?medid=${medid}&user=${state.user._id}`, {
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

        console.log(result1.data);

        // console.log(result1.data);
        // setMedicines(result1.data);
      };

      if (state.user) {
        fetchReviews();
      }
    }, []);

  return <div></div>;
};

export default MedReview;
