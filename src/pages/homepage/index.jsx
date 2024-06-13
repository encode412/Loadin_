import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { HeroSection, ServicesSection } from "./_components";

const Homepage = () => {
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
    <>
      <Navbar scrolling={scrolling} />
      <HeroSection />
      <ServicesSection />
    </>
  );
};

export default Homepage;
