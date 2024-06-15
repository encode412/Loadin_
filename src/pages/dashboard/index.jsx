import React from "react";
import { MapContainer, Navbar, Sidebar } from "./_components";

const Dashboard = () => {
  return (
    <div>
      <Navbar scrolling />
      <div className=" flex lg:flex-row flex-col items-center justify-center py-20 lg:px-20 lg:items-start lg:justify-between gap-x-3 w-full">
        <Sidebar />
        <MapContainer />
      </div>
    </div>
  );
};

export default Dashboard;
