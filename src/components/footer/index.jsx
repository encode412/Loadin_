import React from "react";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../button";

const Footer = () => {
  return (
    <footer className="container container-md px-10 py-20">
      <div className="flex flex-wrap flex-row gap-y-10 md:gap-0 justify-between">
        <div className="flex flex-col items-start mb-7 md:mb-0 basis-[25%]">
          <span className="text-2xl md:text-3xl text-primary font-semibold">
            Loadin
          </span>
        </div>
        <div className="md:basis-[25%] basis-full md:mb-[28px]">
          <span className="text-lg font-semibold mb-2">Loadin</span>
          <div className="flex flex-col">
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Delivery
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Market
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Relocation
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Business
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Cities
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Ordering
            </Link>
          </div>
        </div>
        <div className="md:basis-[25%] basis-1/2 md:mb-[28px]">
          <span className="text-lg font-semibold mb-6">Company</span>
          <div className="flex flex-col">
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              About us
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Vision
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Career
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Blog
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Investors
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Team
            </Link>
          </div>
        </div>
        <div className="md:basis-[25%] basis-full md:mb-[28px]">
          <span className="text-lg font-semibold mb-2">
            Partner with Loadin
          </span>
          <div className="flex flex-col">
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Become a Driver
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Become a loader
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Customer relations
            </Link>
            <Link className="py-2  text-lightgray font-medium hover:text-primary transition-all ease">
              Invest
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-6 py-6 justify-between gap-y-8 md:gap-y-0 flex-col md:flex-row">
        <div className="items-center md:justify-center space-x-10 flex">
          <Link to="/">
            <FaFacebook color="131a53" size={25} />
          </Link>
          <Link to="/">
            <FaInstagram color="131a53" size={25} />
          </Link>
          <Link to="/">
            <FaLinkedin color="131a53" size={25} />
          </Link>
          <Link to="/">
            <FaXTwitter color="131a53" size={25} />
          </Link>
        </div>

        <div className="flex md:flex-row flex-col gap-x-16 gap-y-4 md:gap-y-0 md:items-center md:justify-center">
          <div className="flex items-center gap-x-3">
            <FaGlobe color="131a53" size={25} />
            <span>English</span>
          </div>
          <div className="flex items-center gap-x-3">
            <FaLocationDot color="131a53" size={25} />
            <span>Lagos</span>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col mt-6 md:py-6 gap-y-10 md:gap-y-0  md:justify-between ">
        <div className="flex items-center gap-x-3">
          <AiOutlineCopyrightCircle color="#5F5F5F" />
          <span className="text-lightgray text-sm">
            2024 Loadin Technology Inc
          </span>
        </div>

        <div className="flex gap-x-16 md:items-center md:justify-center">
          <div className="text-lightgray space-x-4">
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
