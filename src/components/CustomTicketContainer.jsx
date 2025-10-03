import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const CustomTicketContainer = ({ data, handleTask }) => {
  const [isAdded, setIsAdded] = useState(false);
  const handleClick = () => {
    setIsAdded(true);
  };

  return (
    <div
      onClick={() => {
        handleTask(data);
        handleClick();
      }}
      className={`bg-white p-2 lg:p-4 rounded-lg shadow-xl space-y-3 ${isAdded ? 'pointer-events-none opacity-50' : 'hover:cursor-pointer'} `}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg lg:text-xl font-medium text-[#001931]">
          {data.title}
        </h3>
        <span
          className={` ${
            data.status === "In-Progress"
              ? "text-[#9C7700] bg-[#F8F3B9]"
              : "text-[#0B5E06] bg-[#B9F8CF]"
          } text-xs lg:text-base rounded-full py-1.5 px-3 flex flex-row items-center`}
        >
          <FontAwesomeIcon
            className={` ${
              data.status === "In-Progress"
                ? "text-[#FEBB0C]"
                : "text-[#02A53B]"
            }`}
            icon={faCircle}
          />
          {data.status}
        </span>
      </div>
      <p className="text-[#627382] max-w-[600px]">{data.description}</p>
      <div className="lg:flex justify-between">
        <div className="flex justify-between gap-2.5">
          <span className="text-[#627382] font-medium">#{data.id}</span>
          <span
            className={`${
              data.priority === "HIGH PRIORITY"
                ? "text-[#F83044]"
                : data.priority === "MEDIUM PRIORITY"
                ? "text-[#FEBB0C]"
                : "text-[#02A53B]"
            } font-medium`}
          >
            {data.priority}
          </span>
        </div>
        <div className="flex justify-between gap-2.5">
          <span className="text-[#627382]">{data.customer}</span>
          <span className="text-[#627382]">
            <FontAwesomeIcon
              className="text-[#627382] px-1.5"
              icon={faCalendar}
            />
            {data.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomTicketContainer;
