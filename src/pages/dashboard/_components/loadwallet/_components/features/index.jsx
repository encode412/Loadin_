import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Features = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-white w-5/6 lg:w-1/2 z-10 py-4 rounded-[10px]">
      <div className="flex px-5 justify-between items-center">
        <span className="text-lightgray md:text-lg font-medium">Features</span>
        <IoIosArrowDown
          color={"#3e3e3e"}
          className={`-rotate-90 transition-all ease-in hover:cursor-pointer ${
            open && "rotate-0"
          }`}
          onClick={handleClick}
          fontSize={20}
        />
      </div>

      <div
        className={`px-12 transition-all ease-in gap-y-2 py-2 flex-col ${
          open ? "flex" : "hidden"
        }`}
      >
        <ul style={{ listStyleType: "disc" }}>
          <li>Quick cash</li>
          <li>Quick cash</li>
          <li>Quick cash</li>
        </ul>
     
      </div>
    </div>
  );
};

export default Features;
