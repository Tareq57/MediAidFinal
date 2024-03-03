import React from "react";
import Qualifs from "@/assets/images/qualifs.svg";

const TestOverview = ({ test }) => {
  console.log(test);
  return (
    <div className="bg-slate-100 p-5 flex-col space-y-3">
      <div>
        <p>{test.description}</p>
      </div>
    </div>
  );
};

export default TestOverview;
