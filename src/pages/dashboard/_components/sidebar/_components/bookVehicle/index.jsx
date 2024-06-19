import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setBookedDate, setBookedTime, setDashboardNav } from "../../../../../../redux/features/eventSlice";
import { LuTruck } from "react-icons/lu";
import { Button } from "../../../../../../components";

const BookVehicle = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleClick = () => {
    dispatch(setDashboardNav("order"));
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    dispatch(setBookedDate(date));
  };

  const handleTimeChange = (event) => {
    const time = event.target.value;
    setSelectedTime(time);
    dispatch(setBookedTime(time));
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <IoIosArrowDown
            color={"#3e3e3e"}
            className="rotate-90 hover:cursor-pointer"
            onClick={handleClick}
            fontSize={20}
          />
        </div>
        <div className="flex flex-col gap-y-3 py-3">
          <span className="text-xl font-semibold text-['#181818]">
            When do you want to move the load?
          </span>
          <div className="flex relative items-center">
            <label htmlFor="date"></label>
            <input
              type="date"
              id="date"
              className="text-lightgray bg-[#eee] px-8 py-3 w-full placeholder-[#181818] rounded-[5px]"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="flex relative items-center">
            <label htmlFor="time"></label>
            <input
              type="time"
              id="time"
              className="text-lightgray bg-[#eee] px-8 py-3 w-full placeholder-[#181818] rounded-[5px]"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </div>
          <div className="flex flex-col items-start gap-y-5">
            <div className="flex items-center gap-x-1 w-full">
              <LuTruck className="" size={20} color="#181818" />
              <span className=" text-lightgray text-sm  ">
                Choose your pickup time up to 30 days in advance
              </span>
            </div>

            <div className="flex items-center gap-x-1 w-full">
              <LuTruck className="" size={20} color="#181818" />
              <span className=" text-lightgray text-sm  ">
              Specify the exact pickup time to ensure the availability
              </span>
            </div>
            <div className="flex items-center gap-x-1 w-full">
              <LuTruck className="" size={20} color="#181818" />
              <span className=" text-lightgray text-sm  ">
              Indicate any additional preferences or requirements,
              </span>
            </div>
            <div className="flex items-center gap-x-1 w-full">
              <LuTruck className="" size={20} color="#181818" />
              <span className=" text-lightgray text-sm  ">
              Cancel at no charge up to 3 days in advance
              </span>
            </div>
            <Button className='w-full' onClick={handleClick}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookVehicle;