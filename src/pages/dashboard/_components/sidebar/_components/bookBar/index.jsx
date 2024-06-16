import React, { useEffect, useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { MdHourglassTop, MdOutlinePinDrop } from "react-icons/md";
import { Button } from "../../../../../../components";
import { LuTruck } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  setDropoffLocation,
  setPickupLocation,
} from "../../../../../../redux/features/locationSlice";
import { setChooseDriver, setDashboardNav } from "../../../../../../redux/features/eventSlice";

const BookBar = () => {
  const dispatch = useDispatch();
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const bookedDate = useSelector(
    (state) => state.eventstate?.eventState?.bookedDate
  );
  const bookedTime = useSelector(
    (state) => state.eventstate?.eventState?.bookedTime
  );
  console.log(bookedDate, bookedTime)
  const handlePlaceSelect = (place, type) => {
    if (place && place.geometry && place.geometry.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      if (type === "pickup") {
        setPickup({ lat, lng });
      } else if (type === "dropoff") {
        setDropoff({ lat, lng });
      }
    } else {
      console.log("Invalid place or location information.");
    }
  };
const handleBookClick = () => {

    dispatch(setDashboardNav('bookvehicle'))

  
}
  useEffect(() => {
    if (pickup) {
      dispatch(setPickupLocation(pickup));
    }
  }, [pickup]);

  useEffect(() => {
    if (dropoff) {
      dispatch(setDropoffLocation(dropoff));
    }
  }, [dropoff]);
  const handleLocationSearch = () => {
    dispatch(setChooseDriver(true));
  };
  return (
    <div className="flex flex-col">
      <span className="text-xl text-[#181818] text-start font-semibold">
        Order a vehicle
      </span>
      <div className="flex flex-col gap-y-3 py-4">
        <div className="flex relative items-center gap-x-2">
          <LuTruck className="absolute left-4" size={20} color="#181818" />
          <Autocomplete
            apiKey="AIzaSyDZM-DqObpYUwm2nx-iAqs_wXdJ65r1FVY"
            autocompletionRequest={{
              types: ["geocode"],
              componentRestrictions: { country: "ng" },
            }}
            placeholder="Pickup location"
            onPlaceSelected={(place) => handlePlaceSelect(place, "pickup")}
            style={{
              padding: "10px",
              paddingLeft: "50px",
              backgroundColor: "#ebe9e9",
              width: "100%",
            }}
            renderInput={(props) => (
              <input
                type="text"
                {...props}
                className=" text-lightgray px-12 py-2 w-full placeholder-lightgray rounded-[5px]"
              />
            )}
          />
        </div>
        <div className="flex relative items-center gap-x-2">
          <MdOutlinePinDrop
            className="absolute left-4"
            size={20}
            color="#181818"
          />
          <Autocomplete
            apiKey="AIzaSyDZM-DqObpYUwm2nx-iAqs_wXdJ65r1FVY"
            autocompletionRequest={{
              types: ["geocode"],
            }}
            placeholder="Dropoff location"
            onPlaceSelected={(place) => handlePlaceSelect(place, "dropoff")}
            style={{
              padding: "10px",
              paddingLeft: "50px",
              backgroundColor: "#ebe9e9",
              width: "100%",
            }}
            renderInput={(props) => (
              <input
                type="text"
                {...props}
                className=" text-lightgray px-12 py-2 w-full placeholder-lightgray rounded-[5px]"
              />
            )}
          />
        </div>

        <div
          type="text"
          className="bg-[#ebe9e9] text-sm relative items-center text-[#181818] hover:cursor-pointer px-12 py-2 w-full rounded-[5px]"
          onClick={handleBookClick}
        >
          <MdHourglassTop
            className="absolute left-4"
            size={20}
            color="#181818"
          />
          Book a vehicle:{' '}
          <span>{bookedDate} {bookedTime}</span>
          <IoIosArrowDown
            size={15}
            color="#181818"
            className="absolute top-[36%] right-3"
          />
        </div>

        <div
          type="text"
          className="bg-[#ebe9e9] font-medium text-[15px] w-fit relative text-[#181818] hover:cursor-pointer px-12 my-3 py-2 rounded-[5px]"
        >
          <GiTakeMyMoney
            className="absolute left-4"
            size={20}
            color="#181818"
          />
          Send a vehicle
          <IoIosArrowDown
            size={15}
            color="#181818"
            className="absolute top-[30%] right-2"
          />
        </div>
        <Button className="w-full" onClick={handleLocationSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default BookBar;
