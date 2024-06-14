import React from "react";
import { Button } from "../../../../components";
import { scanqr } from '../../../../constants/images'

const BannerSection = () => {
  return (
    <section className="w-full px-0 overflow-hidden mb-32 md:mb-20">
      <div className="bg-primary flex md:flex-row flex-col justify-between md:px-10 h-[350px] md:h-[300px]">
        <div className="flex container-md m-auto items-center md:items-start justify-center h-full flex-col gap-y-2 md:py-0 py-6 md:gap-y-4 text-white ">
          {/* <span className='font-semibold md:text-5xl text-3xl'>Download our apps</span> */}
          <span className="font-semibold text-center md:text-start md:text-5xl text-3xl">
            One tap away from a stress free day
          </span>
          <span className="font-normal md:text-2xl text-base">
            Available for android and ios
          </span>
          <Button
            children="Download the app"
            border="none"
            borderRadius="20px"
            className="w-fit font-medium transition-all duration-300 ease-in hover:scale-105 text-xs md:text-base z-50"
            padding={"10px 20px"}
          />
        </div>

        <div className="flex m-auto h-full items-center">
          <img src={scanqr} className="md:w-[200px] w-[100px]" alt="scan me" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
