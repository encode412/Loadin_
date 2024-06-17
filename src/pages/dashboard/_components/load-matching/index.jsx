import React from "react";
import { Features, HeroSection } from "./_components";
import ServicesCard from './_components/services-card'
import Navbar from "../post-bid/_components/navbar";

const LoadMatching = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesCard />
    </div>
  );
};

export default LoadMatching;
