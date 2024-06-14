import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components";
import SignupForm from "./_components/form";

const Signup = () => {
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
      <Navbar hideLink scrolling={true} />
      <SignupForm />
    </div>
  );
};

export default Signup;
