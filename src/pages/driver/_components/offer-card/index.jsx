import React from "react";
import { services2 } from "../../../../constants/images";
import { Button } from "../../../../components";

const OfferCard = () => {
  return (
    <section className="container px-6 lg:px-0 overflow-hidden mb-32 md:mb-40">
      <div className="container container-md mx-auto">
        <div className="flex items-center gap-36 justify-between">
          <div className="flex flex-col gap-4 md:max-w-[560px] w-full">
            <span className="text-[26px] lg:text-5xl !leading-[1.3] text-[#131a53] font-semibold">
              Earn money as a driver
            </span>
            <img
            src={services2}
            alt="loadin"
            className="rounded-[10px] md:hidden block w-[550px]"
          />
            <span className="text-lightgray text-base">
              Consectetur optio perferendis dignissimos animi dolor, sapiente,
              molestiae voluptates corrupti harum fugit quam consequuntur,
              Consectetur optio perferendis dignissimos animi dolor, sapiente,
              molestiae voluptates corrupti harum fugit quam consequuntur
            </span>

            <Button
              children="Get started"
              border="none"
              borderRadius="20px"
              backgroundColor="#f7f7f7"
              textColor="#000"
              className="w-fit font-medium transition-color ease-in hover:!bg-[#eee] text-xs md:text-base"
              padding={"10px 20px"}
            />
          </div>
          <img
            src={services2}
            alt="loadin"
            className="rounded-[10px] md:block hidden w-[550px]"
          />
        </div>{" "}
      </div>
    </section>
  );
};

export default OfferCard;
