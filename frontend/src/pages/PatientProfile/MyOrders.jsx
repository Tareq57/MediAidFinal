import React from "react";
import { useEffect, useState, useContext } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState(null);

  const { state, setState } = useContext(AuthContext);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(
        `${BASE_URL}/order/fetchorders/${state.user._id}`,
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

      setOrders(result.data);
    };

    fetchOrders();
  }, []);

  return <div>MyOrders</div>;
};

export default MyOrders;
