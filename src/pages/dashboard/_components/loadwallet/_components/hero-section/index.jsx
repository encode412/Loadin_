import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../../../../../../components";
import { Features, Instructions } from "../../_components";
import { Link, useNavigate } from "react-router-dom";
import FeatureModal from "../feature-modal";

const HeroSection = () => {
  return (
    <div className="overflow-hidden h-scren">
      <section className="w-full px-0 mb-24 md:mb-40">
        <div className="bg-black bg-opacity-40 top-0 w-full absolute left-0 right-0 h-full lg:h-[40rem] z-10" />
        <main className="relative">
          <div className="overflow-hidden bg-right bg-no-repeat bg-cover h-screen lg:h-[40rem] relative bg-loadbgone">
            <div className="flex flex-col px-8 md:px-10 max-w-[1184px] pt-[6rem] md:pt-40 mx-auto space-y-4 animate-slide_up ">
              <span className="text-4xl uppecase lg:text-5xl lg:!leading-[5.2rem] xl:text-7xl font-bold text-white z-10">
                What is
                <br />
                <span className="uppercae">LoadWallet</span>
              </span>
              <span className="font-medium text-[#eee] text-lg md:text-xl w-full md:w-1/2 z-10">
              Eliminate the hassle of traditional transfers and avoid delays caused by network issues. Instead, when using our service, the driver simply requests the amount for moving the load directly on the platform. Users can conveniently review the request and approve the payment with a simple click, streamlining the payment process and facilitating seamless transactions.
              </span>
            </div>
            <div className="z-20 lg:hidden block shadow-2xl lg:right-[10%] top-[50%] rounded-[20px] lg:w-[30%] h-full absolute bg-white">
              <FeatureModal />
            </div>
          </div>{" "}
          <div className="z-20 lg:block hidden shadow-2xl lg:right-[10%] top-[30%] rounded-[20px] lg:w-[30%] h-full absolute bg-white">
            <FeatureModal />
          </div>
          <div className="absolute z-[999] left-[40%] top-[50%]"></div>
        </main>
      </section>
    </div>
  );
};

export default HeroSection;
