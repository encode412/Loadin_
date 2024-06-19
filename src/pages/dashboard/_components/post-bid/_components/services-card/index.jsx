import React from "react";
import { Button } from "../../../../../../components";
import { Link } from "react-router-dom";

const ServicesCard = () => {
  return (
    <section className="container px-0 overflow-hidden mb-32 md:mb-40">
      <div className="container container-md mx-auto">
        <div className="flex flex-col gap-4 px-8 w-full">
          <span className="lg:text-5xl text-2xl !leading-[1.3] text-[#131a53] font-semibold">
            Benefits of using LoadConnect.
          </span>
          <span className="text-lightgray lg:w-5/6 lg:text-lg">
          Save time and effort by receiving bids directly from interested drivers, eliminating the need for manual negotiations and inquiries. It streamlines the process, making it efficient and convenient to find the most suitable and cost-effective transportation solution for their load.
          </span>

          <Link to="dashboard" className=" z-10">
            <Button
              children="Proceed"
              border="none"
              borderRadius="20px"
              className="w-fit font-medium transition-colors delay-200 ease-in-out hover:!bg-[#131a53] text-sm md:text-base"
              padding={"10px 20px"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
