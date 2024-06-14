import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../../components";
import { HeroSection, OfferCard, ServicesCard } from "./_components";

const BecomeADriver = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <div>
      <Navbar scrolling={scrolling} />
      <HeroSection />
      <ServicesCard />
      <OfferCard />
      <Footer />
    </div>
  );
};

export default BecomeADriver;
