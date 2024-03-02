import React from "react";
import { useEffect, useState } from "react";
import BASE_URL from "@/config";

const AllMedicine = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      const res = await fetch(`${BASE_URL}/medicine`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      setMedicines(result.data);
    };

    fetchMedicines();
  }, []);
  return <div>AllMedicine</div>;
};

export default AllMedicine;
