import React from "react";
import { Button } from "../../../../components";

const ServicesCard = () => {
  return (
    <section className="container px-0 overflow-hidden mb-32 md:mb-40">
      <div className="container container-md mx-auto">
        <div className="flex flex-col gap-4 px-8 w-full">
          <span className="lg:text-5xl text-2xl !leading-[1.3] text-[#131a53] font-semibold">
            Benefits of becoming a Loadin driver.
          </span>
          <span className="text-lightgray lg:w-5/6 lg:text-lg">
          Loadin offers competitive compensation for drivers. You have the opportunity to earn a steady income and increase your earnings based on the number of loads you transport. <br /> <br />
          We provides access to a diverse range of loads, catering to various industries and requirements. This variety allows you to choose loads that align with your expertise, preferences, and the type of vehicle you own.          </span>

          <Button
            children="Sign up"
            border="none"
            borderRadius="20px"
            backgroundColor="#131a53"
            textColor="#fff"
            className="w-fit font-medium transition-all ease-in hover:scale-105 text-xs md:text-base"
            padding={"10px 20px"}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
