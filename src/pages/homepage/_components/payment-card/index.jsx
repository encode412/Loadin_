import React from "react";
import { homepage2 } from "../../../../constants/images";
import { Button } from "../../../../components";
import { FaTruck, FaPiggyBank } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";

const PaymentSection = () => {
  return (
    <section className="container px-8 md:px-10 overflow-hidden mb-32 md:mb-40">
      <div className="container container-md mx-auto">
        <div className="flex md:flex-row flex-col items-center gap-10 justify-between">
          <img
            src={homepage2}
            alt="loadin"
            className="rounded-[10px] hidden md:block w-[550px]"
          />
          <div className="flex flex-col gap-4 md:max-w-[560px] w-full">
          <span className="lg:text-5xl md:text-3xl text-[26px] text-start !leading-[1.3] text-[#131a53] font-semibold">
              Sweet prices with our unique payment system
            </span>
            <span className="text-lightgray">
              Consectetur optio perferendis dignissimos animi dolor, sapiente,
              molestiae voluptates corrupti harum fugit quam consequuntur
            </span>
            <img
            src={homepage2}
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
                <RiCustomerServiceFill size={25} color="#131a53" />
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
                <FaPiggyBank size={25} color="#131a53" />
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

export default PaymentSection;
