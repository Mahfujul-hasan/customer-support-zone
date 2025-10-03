import React from "react";
import Container from "./Container";

const CountBox = ({totalTask, totalResolved}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-20 mx-2.5">
      <div className="h-[250px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] count-box relative">
        <img className="absolute left-0" src="/vector1.png" alt="" />
        <img
          className="transform
            scale-x-[-1]  absolute right-0"
          src="/vector1.png"
          alt=""
        />
        <h4 className="text-2xl">In-progress</h4>
        <p className="text-6xl font-semibold">{totalTask}</p>
      </div>
      <div className="h-[250px] bg-linear-to-r from-[#54CF68] to-[#00827A] count-box relative">
        <img className="absolute left-0" src="/vector1.png" alt="" />
        <img
          className="transform
            scale-x-[-1]  absolute right-0"
          src="/vector1.png"
          alt=""
        />
        <h4 className="text-2xl">Resolved</h4>
        <p className="text-6xl font-semibold">{totalResolved}</p>
      </div>
    </div>
  );
};

export default CountBox;
