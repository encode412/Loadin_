
const HeroSection = () => {
  return (
    <section className="w-full px-0 overflow-hidden mb-32 md:mb-40">
      <div className="bg-black bg-opacity-40 top-0 w-full absolute left-0 right-0 min-h-[670px] z-10" />
      <main className="relative">
        <div className="overflow-hidden bg-center bg-no-repeat bg-cover h-[670px] relative bg-driverbg">
        <div className="flex flex-col px-8 md:px-10 max-w-[1184px] pt-[12rem] md:pt-40 mx-auto space-y-4 animate-slide_up ">
            <span className="text-4xl lg:text-5xl !leading-[1.4] xl:text-[4rem] font-bold z-10 text-white">
              Become a driver
              <br />
              and earn money
            </span>
            <span className="font-medium text-[#eee] text-lg md:text-xl w-full md:w-1/2 z-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              deleniti ad nesciunt consequatur dicta nisi doloribus
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
