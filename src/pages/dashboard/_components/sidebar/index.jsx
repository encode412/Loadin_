import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookBar from "./_components/bookBar";

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState("order");
  const navValue = useSelector(
    (state) => state.eventstate?.eventState?.dashboardNav
  );
  

  useEffect(() => {
    setActiveNav(navValue);
  }, [navValue]);

  useEffect(() => {
    setActiveNav("order");
  }, []);

  return (
    <div className="border border-[#b9b8b8] mt-10 px-10 pl-5 w-[20%] py-3">
      <BookBar />
    </div>
  );
};

export default Sidebar;
