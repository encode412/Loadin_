import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuX } from "react-icons/lu";
import { Link } from "react-router-dom";
import Button from "../button";
import { play, store } from "../../constants/images";

const Navbar = ({ shadow, scrolling, hideLink }) => {
  const [toggleMenu, setToggleMenu] = useState(false); // initialize togglemenu state to keep track if mobile menu is open
  const [isDropDownOpen, setIsDropDownOpen] = useState(false); // initialize the dropdown for choosing location
  const [location, setLocation] = useState("Location");

  return (
    <>
      <div
        className={`transition-all flex items-center ease-out duration-300 animate-fade_in w-full h-10 md:h-20 fixed top-0 z-50 left-0 right-0 py-6 md:py-10   ${
          scrolling
            ? "bg-[#f7f7f7] transition-all ease z-[999] text-black "
            : "text-white"
        } ${shadow && "shadow-lg"}`}
      >
        <div className="flex items-center px-8 md:px-10 justify-between mx-auto xl:gap-0 md:gap-3 max-w-[1184px] w-full">
          <Link to="/" className="font-semibold text-xl md:text-2xl">
            <span>Loadin</span>
          </Link>

          <div
            className={`relative hidden items-center justify-center gap-2 md:gap-6 font-semibold text-[16px] mx-auto xl:w-[700px] ${
              hideLink ? "hidden" : "lg:flex"
            }`}
          >
            <Link to="/driver">Become a Driver</Link>
            <Link to="/auth/login">Book a Vehicle</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/support">Support</Link>
          </div>
          <div className="flex items-center space-x-6">
            {/*  */}
            <Link
              to="/auth/login"
              className={`hidden ${hideLink ? "hidden" : "md:block"}`}
            >
              <Button
                children="Login"
                border="none"
                backgroundColor={`${!scrolling ? "#fff" : "#eee"}`}
                textColor="#000"
                padding="5px 20px"
                borderRadius="20px"
                className="w-fit !text-sm !font-bold"
              />
            </Link>
            <Link
              to="/auth/signup"
              className={`hidden ${hideLink ? "hidden" : "md:block"}`}
            >
              <Button
                children="Sign up"
                // border="none"
                backgroundColor="transparent"
                padding="5px 20px"
                textColor={`${scrolling ? "#000" : "#fff"}`}
                borderRadius="20px"
                className="w-fit !text-sm !font-bold"
              />
            </Link>
            <div className="cursor-pointer">
              <GiHamburgerMenu
                color={`${scrolling ? "#000" : "#fff"}`}
                fontSize={20}
                onClick={() => setToggleMenu(true)}
              />
            </div>
          </div>
        </div>

        {toggleMenu && (
          <div className="fixed px-6 top-0 left-0 w-full bg-white transition-all duration-150 flex flex-col z-50 pt-6 items-center animate-slideBottom overflow-hidden h-screen">
            <LuX
              className="text-2xl absolute top-5 right-6 cursor-pointer"
              color="#101010"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="list-none w-full">
              <li className="mt-12 cursor-pointer text-primary text-xl">
                <div className="flex justify-between items-center">
                  <Link
                    to="/driver"
                    className="text-[#101010B2] uppercase font-semibold"
                  >
                    Become a driver
                  </Link>
                </div>
              </li>
              <li className="mt-12 cursor-pointer text-primary text-xl">
                <div className="flex justify-between items-center">
                  <Link
                    to="/auth/login"
                    className="text-[#101010B2] uppercase font-semibold"
                  >
                    book a vehicle
                  </Link>
                </div>
              </li>
              <li className="mt-12 cursor-pointer text-primary text-xl">
                <div className="flex justify-between items-center">
                  <Link
                    to="/about-us"
                    className="text-[#101010B2] uppercase font-semibold"
                  >
                    about us
                  </Link>
                </div>
              </li>
              <li className="mt-12 cursor-pointer text-primary text-xl">
                <div className="flex justify-between items-center">
                  <Link
                    to="/support"
                    className="text-[#101010B2] uppercase font-semibold"
                  >
                    contact us
                  </Link>
                </div>
              </li>
            </ul>
            <div className="flex flex-col items-center space-y-6 my-6 w-full">
              <Link to="/auth/login" className="w-[100%] mx-auto">
                <Button
                  className="hover:scale-95 font-extrabold uppercase text-primary w-full !text-base flex justify-center items-center"
                  children="login"
                  padding={"15px 30px"}
                />
              </Link>
              <Link to="/auth/signup" className="w-[100%] mx-auto">
                <Button
                  className="hover:scale-95 font-extrabold uppercase text-primary w-full !text-base flex justify-center items-center"
                  backgroundColor={"#000"}
                  children="sign up"
                  padding={"15px 30px"}
                />
              </Link>
            </div>

            <div className="flex flex-col w-3/4 absolute bottom-6 left-0 px-6">
              <div className="flex flex-col gap-2 items-start">
                <span className="text-primary font-bold">Loadin</span>
                <span className="font-medium text-[#181818]">
                  There's more to love in the app
                </span>
              </div>

              <div className="flex gap-4 mt-3">
                <Link
                  to="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={store} alt="apple store" />
                </Link>
                <Link
                  to="https://play.google.com/store/apps?hl=en&gl=US"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={play} alt="apple store" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
