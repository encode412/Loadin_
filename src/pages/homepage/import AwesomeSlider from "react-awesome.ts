import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Features } from "../../../../constants";

const AutoplaySlider = withAutoplay(AwesomeSlider);

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
        <span className="text-sm md:text-base text-primary">
          {feature.description}
        </span>
      </div>
    </div>
  ))}
</AutoplaySlider>;
