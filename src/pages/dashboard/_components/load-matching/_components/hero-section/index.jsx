import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../../../../../../components";
import { Features, Instructions } from "..";
import { Link, useNavigate } from "react-router-dom";
import FeatureModal from "../feature-modal";

const HeroSection = () => {
  return (
    <div className="overflow-hidden h-scren">
      <section className="w-full px-0 mb-24 md:mb-40">
        <div className="bg-black bg-opacity-40 top-0 w-full absolute left-0 right-0 h-full lg:h-[40rem] z-10" />
        <main className="relative">
          <div className="overflow-hidden bg-right bg-no-repeat bg-cover h-screen lg:h-[40rem] relative bg-postloadbg">
            <div className="flex flex-col px-8 md:px-10 max-w-[1184px] pt-[10rem] md:pt-40 mx-auto space-y-4 animate-slide_up ">
              <span className="text-4xl uppecase lg:text-5xl lg:!leading-[5.2rem] xl:text-7xl font-bold text-white z-10">
                What is
                <br />
                <span className="uppercae">LoadMatching</span>
              </span>
              <span className="font-medium text-[#eee] text-lg md:text-xl w-full md:w-1/2 z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                deleniti ad nesciunt consequatur dicta nisi doloribus ipsa
                dolores quae? Distinctio, voluptatum totam aperiam excepturi
                accusantium repellat molestiae perspiciatis eveniet ipsam.
              </span>
            </div>
            <div className="z-20 shadow-2xl lg:right-[10%] top-[50%] rounded-[20px] lg:w-[30%] h-full absolute bg-white">
              <FeatureModal />
            </div>
          </div>
          <div className="absolute z-[999] left-[40%] top-[50%]"></div>
        </main>
      </section>
    </div>
  );
};

export default HeroSection;
