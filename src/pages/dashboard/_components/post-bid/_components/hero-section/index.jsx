import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../../../../../../components";
import { Features, Instructions } from "../../_components";
import { Link, useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="overflow-hidden h-screen">
      <section className="w-full px-0 mb-24 md:mb-40">
        <div className="bg-black bg-opacity-40 top-0 w-full absolute left-0 right-0 min-h-full z-10" />
        <main className="relative">
          <div className="overflow-hidden bg-right bg-no-repeat bg-cover h-screen lg:h-[1200px] relative bg-postloadbg">
            <IoIosArrowDown
              onClick={handleBack}
              color={"#fff"}
              className="rotate-90 top-[5%] left-[5%] z-20 absolute hover:cursor-pointer"
              fontSize={45}
            />

            <div className=" overflow-hidden flex flex-col items-center px-8 md:px-10 max-w-[1184px] pt-[10rem] md:pt-40 mx-auto space-y-4 animate-slide_up ">
              <span className="text-4xl lg:text-5xl text-center uppercase !leading-[1.4] xl:text-[4.8rem] font-bold text-white z-10">
                <span>what is</span>
                <br />
                <span className="text-[#3528ac]">
                  load<span className="text-white">connect?</span>
                </span>
              </span>
              <span className="font-medium text-[#eee] text-lg md:text-xl w-full md:w-3/4 text-center z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                deleniti ad nesciunt consequatur dicta nisi doloribus ipsa
                dolores quae? Distinctio, voluptatum totam aperiam excepturi
                accusantium repellat molestiae perspiciatis eveniet ipsam.
              </span>
              <Features />
              <Instructions />
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
          <div className="absolute z-[999] left-[40%] top-[50%]"></div>
        </main>
      </section>
    </div>
  );
};

export default HeroSection;
