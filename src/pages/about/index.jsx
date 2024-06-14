import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../../components";

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
    <div>
      <Navbar scrolling={true} />
      <div className="h-screen flex justify-center items-center flex-col">
        <span className="w-20">🚧🚧🚧🚧</span>
        <span className="text-primary uppercase md:text-2xl">
          Under construction
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
