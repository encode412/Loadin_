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
              Credible and Verified Drivers
            </span>
            <span className="text-lightgray">
            At our platform, we prioritize the safety and reliability of load transportation. To achieve this, we have implemented a stringent verification process for drivers, ensuring that only verified and credible professionals are part of our network
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
                    <span>Rigorous Screening</span>
                  </div>
                  <span className="text-lightgray">
                  We conduct thorough background checks on all drivers before they are approved to join our platform. This includes verifying their professional experience, licenses, certifications, and any relevant qualifications required for transporting heavy loads.
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <RiCustomerServiceFill size={25} color="#131a53" />
                <div className="flex flex-col">
                  <div className="text-xl flex gap-2">
                    <span>Driver Ratings and Feedback</span>
                  </div>
                  <span className="text-lightgray">
                  We encourage our customers to provide ratings and feedback on their experience with drivers. This feedback system allows us to continually assess the performance of drivers and identify any areas that need improvement
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <FaPiggyBank size={25} color="#131a53" />
                <div className="flex flex-col">
                  <div className="text-xl flex gap-2">
                    <span>Ongoing Monitoring</span>
                  </div>
                  <span className="text-lightgray">
                  We continuously monitor the performance of drivers. This includes tracking their adherence to safety regulations, compliance with industry standards, and promptness in delivering loads. Any deviations from expected levels of service are promptly addressed to maintain the highest standards of reliability.
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
