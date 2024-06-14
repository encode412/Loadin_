import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Features } from "../../../../constants";

const AutoplaySlider = withAutoplay(AwesomeSlider);




const FeatureSlider = () => {
  return (
    <section className="text-white bg-[#131a53] containe md:py-20 pb-36 pt-10 px-0 md:px-10 overflow-hidden mb-32 md:mb-40">
      <div className="container-md flex-col md:flex-row flex items-center gap-x-36 justify-between mx-auto md:px-0 px-8">
        <div className="flex items-start md:space-y-8 space-y-5 flex-col md:w-1/2 py-10 md:py-0">
          <span className="md:text-2xl text-xl lg:text-3xl font-medium uppercase">
            Core features
          </span>
          <span className="md:text-start text-xl font-light">
            Effortless Heavy-Load Transportation Made Simple
          </span>
          <span className="md:text-start text-xl font-light">Unleash the power of innovation with our cutting-edge features for heavy-load transportation</span>
        </div> 
        <AutoplaySlider play={true} cancelOnInteraction={true} interval={6000}>
          {Features.map((feature) => (
            <div
              className="flex justify-center flex-col h-full bg-[#fff] rounded-lg"
              key={feature.id}
            >
              <div className="flex gap-y-3  text-center items-center px-4 flex-col text-lightgray">
                <img
                  src={feature.imageUrl}
                  alt="book a vehicle"
                  className="md:w-[250px] w-[150px]"
                />
                <span className="font-medium md:font-semibold md:text-3xl text-primary">
                  {feature.title}
                </span>
                <span className="text-xs md:text-base text-primary">
                  {feature.description}
                </span>
              </div>
            </div>
          ))}
        </AutoplaySlider>      
      </div>
    </section>
  );
};

export default FeatureSlider;
