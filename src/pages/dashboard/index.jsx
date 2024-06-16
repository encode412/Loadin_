import React from "react";
import { ChooseDriver, MapContainer, Navbar, PaymentModal, Sidebar } from "./_components";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const chooseDriver = useSelector(
    (state) => state.eventstate?.eventState?.chooseDriver
  );
  const paymentModal = useSelector(
    (state) => state.eventstate?.eventState?.paymentModal
  );
  return (
    <div className="relative">
      {paymentModal && <div className="absolute z-[99] bg-black bg-opacity-25 top-0 bottom-0 left-0 right-0" />}
      <Navbar scrolling />
      <div className=" flex lg:flex-row flex-col items-center justify-center py-20 lg:px-20 lg:items-start lg:justify-between gap-x-3 w-full">
        <Sidebar />
        {chooseDriver && <ChooseDriver />}
        {paymentModal && <div className="absolute z-[999] top-[30%] lg:left-[35%] w-3/4 lg:w-[30%]"><PaymentModal /></div>}
        <MapContainer />
      </div>
    </div>
  );
};

export default Dashboard;
