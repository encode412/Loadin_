import React from "react";
import { Button } from "../../../../components";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePinDrop, MdHourglassTop } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuTruck } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="border border-[#b9b8b8] mt-10 px-10 pl-5 w-[20%] py-3">
      <div className="flex flex-col">
        <span className="text-xl text-[#181818] text-start font-medium">
          Order a vehicle
        </span>
        <div className="flex flex-col gap-y-3 py-4">
          <div className="flex relative items-center gap-x-2">
            <LuTruck className="absolute left-4" size={20} color="#181818" />
            <input
              type="text"
              className="bg-[#ebe9e9]  text-lightgray px-12 py-2 w-full placeholder-lightgray rounded-[5px]"
              placeholder="Pickup location"
            />
          </div>
          <div className="flex relative items-center gap-x-2">
            <MdOutlinePinDrop
              className="absolute left-4"
              size={20}
              color="#181818"
            />
            <input
              type="text"
              className="bg-[#ebe9e9]  text-lightgray px-12 py-2 w-full placeholder-lightgray rounded-[5px]"
              placeholder="Dropoff location"
            />
          </div>

          <div
            type="text"
            className="bg-[#ebe9e9] relative items-center text-lightgray hover:cursor-pointer px-12 py-2 w-full rounded-[5px]"
          >
            <MdHourglassTop
              className="absolute left-4"
              size={20}
              color="#181818"
            />
            Book a vehicle
            <IoIosArrowDown
              size={15}
              color="#181818"
              className="absolute top-[36%] right-3"
            />
          </div>

          <div
            type="text"
            className="bg-[#ebe9e9] text-sm w-fit relative text-lightgray hover:cursor-pointer px-12 my-3 py-2 rounded-[5px]"
          >
            <GiTakeMyMoney
              className="absolute left-4"
              size={20}
              color="#181818"
            />
            Share bills
            <IoIosArrowDown
              size={15}
              color="#181818"
              className="absolute top-[30%] right-2"
            />
          </div>
          <Button className="w-full">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
