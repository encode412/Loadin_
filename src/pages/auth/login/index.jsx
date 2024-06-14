import React, { useEffect, useState } from "react";
import LoginForm from "./_components/form";
import { Navbar } from "../../../components";

const Login = () => {
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
      <LoginForm />
    </div>
  );
};

export default Login;
