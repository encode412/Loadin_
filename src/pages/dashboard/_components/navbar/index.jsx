import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = ({ shadow, scrolling, hideLink }) => {
  const [toggleMenu, setToggleMenu] = useState(false); // initialize togglemenu state to keep track if mobile menu is open

  return (
    <>
      <div
        className={`transition-all flex items-center ease-out duration-300 animate-fade_in w-full h-10 md:h-20 fixed top-0 z-50 left-0 right-0 py-6 md:py-10   ${
          scrolling
            ? "bg-[#f7f7f7] transition-all ease z-[999] text-black "
            : "text-white"
        } ${shadow && "shadow-lg"}`}
      >
        <div className="flex items-center px-8 md:px-10 mx-10 justify-between xl:gap-0 md:gap-3 max-w-[1184p w-full">
          <div
            className={`relative hidden items-center justify-center gap-2 md:gap-6 font-semibold text-[16px] ${
              hideLink ? "hidden" : "lg:flex"
            }`}
          >
            {" "}
            <Link to="/" className="font-semibold text-2xl md:text-2xl">
              <span>Loadin</span>
            </Link>
            <div className="flex items-center mx-10 gap-x-6">
            <Link to="/auth/login">Book</Link>
            <Link to="/driver">Post Bid</Link>            
            <Link to="/about-us">Vehicles</Link>
            <Link to="/support">AR visualization</Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <span>My trips</span>
            <span>My Bids</span>
            <div className="cursor-pointer lg:hidden block">
              <GiHamburgerMenu
                color={`${scrolling ? "#000" : "#fff"}`}
                fontSize={20}
                onClick={() => setToggleMenu(true)}
              />
            </div>
            <div className="cursor-pointer lg:block hidden">
              <CgProfile
                color={`${scrolling ? "#3e3e3e" : "#fff"}`}
                fontSize={30}
                onClick={() => setToggleMenu(true)}
              />
            </div>
            <div className="cursor-pointer lg:block hidden">
              <IoIosArrowDown
                color={`${scrolling ? "#3e3e3e" : "#fff"}`}
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
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
