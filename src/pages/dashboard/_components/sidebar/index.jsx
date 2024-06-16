import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookBar from "./_components/bookBar";
import BookVehicle from "./_components/bookVehicle";

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState("order");
  const navValue = useSelector(
    (state) => state.eventstate?.eventState?.dashboardNav
  );

  console.log(activeNav);
  console.log(navValue);

  useEffect(() => {
    setActiveNav(navValue);
  }, [navValue]);

  useEffect(() => {
    setActiveNav("order");
  }, []);

  return (
    <div className="border border-[#e6e6e6] rounded-[5px] mt-10 lg:px-4 pl-3 w-[90%] px-4 lg:w-[20%] py-3">
      {activeNav === 'order' && <BookBar />}
      {activeNav === 'bookvehicle' && <BookVehicle />}
    </div>
  );
};

export default Sidebar;
