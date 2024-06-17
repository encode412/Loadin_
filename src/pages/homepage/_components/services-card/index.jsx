import React from "react";
import { homepage1 } from "../../../../constants/images";
import { Button } from "../../../../components";
import { FaTruck, FaClock } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

const ServicesCard = () => {
  return (
    <section className="container px-0 overflow-hidden mb-32 md:mb-40">
      <div className="container container-md mx-auto">
        <div className="flex px-8 lg:flex-row flex-col items-center md:gap-10 gap-10 justify-between">
          <img
            src={homepage1}
            alt="loadin"
            className="rounded-[10px] hidden md:block w-full lg:w-[550px]"
          />
          <div className="flex flex-col gap-3 md:gap-4 md:max-ww-full lg:max-w-[560px] w-full md:order-last order-first">
            <span className="lg:text-5xl md:text-3xl text-[26px] text-start !leading-[1.3] text-[#131a53] font-semibold">
              Eliminate the hassle of moving
            </span>
            <span className="text-lightgray">
           We specialize in eliminating the challenges associated with transporting your valuable goods. We understand the frustration of finding a suitable vehicle for your load, as well as the anxiety of experiencing a breakdown during transportation.
            </span>
            <img
              src={homepage1}
              alt="loadin"
              className="rounded-[10px] block md:hidden w-[550px]"
            />
            <div className="flex py-6 gap-y-5 flex-col">
              <div className="flex gap-2 items-start">
                <FaTruck size={25} color="#131a53" />
                <div className="flex flex-col">
                  <div className="text-xl flex gap-2">
                    <span>Consectetur optio perferendis</span>
                  </div>
                  <span className="text-lightgray">
                    dignissimos animi dolor, sapiente, molestiae dignissimos
                    animi dolor, sapiente, molestiae
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <FaClock size={25} color="#131a53" />
                <div className="flex flex-col">
                  <div className="text-xl flex gap-2">
                    <span>Consectetur optio perferendis</span>
                  </div>
                  <span className="text-lightgray">
                    dignissimos animi dolor, sapiente, molestiae dignissimos
                    animi dolor, sapiente, molestiae
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <FaPersonWalkingLuggage size={25} color="#131a53" />
                <div className="flex flex-col">
                  <div className="text-xl flex gap-2">
                    <span>Consectetur optio perferendis</span>
                  </div>
                  <span className="text-lightgray">
                    dignissimos animi dolor, sapiente, molestiae dignissimos
                    animi dolor, sapiente, molestiae
                  </span>
                </div>
              </div>
            </div>
            <Button
              children="Learn more"
              border="none"
              borderRadius="20px"
              backgroundColor="#f7f7f7"
              textColor="#000"
              className="w-fit font-medium transition-color ease-in hover:!bg-[#eee] text-xs md:text-base"
              padding={"10px 20px"}
            />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default ServicesCard;
