import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuX } from "react-icons/lu";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ shadow, scrolling, hideLink }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();
  const [navId, setNavId] = useState(0);
  const navValues = [
    {
      id: 0,
      filter: "Order",
      path: "order",
    },
    {
      id: 1,
      filter: "LoadConnect",
      path: "post-bid",
    },
    {
      id: 1,
      filter: "LoadWallet",
      path: "load-wallet",
    },
    {
      id: 2,
      filter: "Vehicles",
      path: "available-vehicles",
    },
    {
      id: 3,
      filter: "Intelligent Load Matching",
      path: "load-matching",
    },
  ];
  const handleClick = () => {
    navigate(-1);
  };
  const handleFilter = (value, id) => {
    setNavId(id);
    dispatch(setDashboardNav(value));
  };
  return (
    <>
      <div
        className={`transition-all flex items-center ease-out duration-300 animate-fade_in w-full h-10 md:h-20 fixed top-0 z-50 left-0 right-0 py-6 md:py-10   ${
          scrolling
            ? "bg-[#f7f7f7] transition-all ease z-20 text-black "
            : "text-white"
        } ${shadow && "shadow-lg"}`}
      >
        <div className="flex items-center md:px-10 mx-10 justify-between lg:flex hidden xl:gap-0 md:gap-3 max-w-[1184px] mx-auto w-full">
          <div className="relative container container-md lg:flex hidden items-center justify-between gap-2 md:gap-6 font-semibold text-[16px]">
            {" "}
            <div
              onClick={handleClick}
              className="font-semibold cursor-pointer text-2xl md:text-2xl"
            >
              <span>Loadin</span>
            </div>
            <div className="flex justify-between lg:w-fit w-full items-center space-x-6">
              <span className="lg:block hidden">My trips</span>
              <span className="lg:block hidden">My Bids</span>

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
        </div>
        <div className="flex items-center mx-14 justify-between lg:hidden w-full">
          <div
            onClick={handleClick}
            className="font-semibold text-2xl md:text-2xl"
          >
            <span>Loadin</span>
          </div>
          <div className="cursor-pointer lg:hidden block">
            <GiHamburgerMenu
              color={`${scrolling ? "#000" : "#fff"}`}
              fontSize={20}
              onClick={() => setToggleMenu(true)}
            />
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
                    to="post-bid"
                    className="text-[#101010B2] uppercase font-semibold"
                  >
                    Loadconect
                  </Link>
                </div>
              </li>
              <li className="mt-12 cursor-pointer text-primary text-xl">
                <div className="flex justify-between items-center">
                  <Link
                    to="load-wallet"
                    className="text-[#101010B2] uppercase font-semibold"
                  >
                    LoadWallet
                  </Link>
                </div>
              </li>
              {/* <li className="mt-12 cursor-pointer text-primary text-xl">
                <div className="flex justify-between items-center">
                  <Link
                    to="/about-us"
                    className="text-[#101010B2] uppercase font-semibold"
                  >
                    Vehicles
                  </Link>
                </div>
              </li> */}
              <li className="mt-12 cursor-pointer text-primary text-xl">
                <div className="flex justify-between items-center">
                  <Link
                    to="load-matching"
                    className="text-[#101010B2] uppercase font-semibold"
                  >
                    Intelligent Load Matching
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
