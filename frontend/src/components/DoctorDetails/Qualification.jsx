import React from "react";
import Qualifs from "@/assets/images/qualifs.svg";

const Qualification = () => {
  return (
    <div className="bg-slate-100 p-5 flex-col space-y-3">
      <h1 className="font-bold text-lg">Qualifications</h1>
      <div >
        <div className="flex items-center space-x-3">
          <img src={Qualifs} alt="" className="w-[25px] h[25px" />
          <p className="text-sm">
            MBBS, MD - General Medicine, DM - Cardiology
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <img src={Qualifs} alt="" className="w-[25px] h[25px" />
          <p className="text-sm">
            MBBS, MD - General Medicine, DM - Cardiology
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <img src={Qualifs} alt="" className="w-[25px] h[25px" />
          <p className="text-sm">
            MBBS, MD - General Medicine, DM - Cardiology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
