import React from "react";
import { MapContainer, Navbar, Sidebar } from "./_components";

const Dashboard = () => {
  return (
    <div>
      <Navbar scrolling />
      <div className=" flex py-20 px-20 justify-between gap-x-3 w-full">
        <Sidebar />
        <MapContainer />
      </div>
    </div>
  );
};

export default Dashboard;
