import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Button } from "../../../../components";
import { recommendedDrivers } from "../../../../constants";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentModal } from "../../../../redux/features/eventSlice";

const ChooseDriver = () => {
  const dispatch = useDispatch();
  // const [showDetails, setShowDetails] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const paymentModal = useSelector(
    (state) => state.eventstate?.eventState?.paymentModal
  );

  const handleDetails = (driverId) => {
    if (selectedDriver === driverId) {
      setSelectedDriver(null);
    } else {
      setSelectedDriver(driverId);
    }
  };
  const handleReviews = (driverId) => {
    if (selectedReview === driverId) {
      setSelectedReview(null);
    } else {
      setSelectedReview(driverId);
    }
  };

  const handleModal = () => {
    dispatch(setPaymentModal(true));
  };

  const handleRequest = () => {
    setIsLoading(true);

    // Simulating a delay before showing the request sent modal
    setTimeout(() => {
      setIsLoading(false);
      setIsRequestSent(true);
    }, 2000);
  };
  const handleCloseRequestSentModal = () => {
    setIsRequestSent(false);
  };

  return (
    <div className="p-10 w-full lg:w-1/2 bg-white relative">
      <div className="flex gap-y-6 flex-col">
        <span className="font-semibold text-3xl text-[#181818]">
          Choose a Driver
        </span>
        <span className="font-semibold text-2xl text-[#181818]">
          Recommended
        </span>
        <div className="flex flex-col gap-y-5">
          {recommendedDrivers.map((driver) => (
            <div className="flex flex-col border-2 border-[#181818] py-2  px-4 rounded-[10px]">
              <div className="flex w-full justify-between " key={driver.id}>
                <div className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-x-4">
                  <div className="relative lg:mx-0 mx-auto">
                    <img
                      src={driver.profile_image}
                      className="w-[70px] rounded-[50%]"
                      alt=""
                    />
                    {driver.certified === true && (
                      <img
                        src="/dashboard/certified.png"
                        className="absolute bottom-0 right-0 w-[20px]"
                        alt="certified"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="text-lg lg:text-2xl font-semibold text-primary">
                      {driver.vehicle_type}
                    </span>
                    <span className="text-base lg:text-xl font-semibold text-primary">
                      {driver.name}
                    </span>
                    <span className="text-xs lg:text-sm text-primary">
                      Experience as a driver:{" "}
                      <span className="font-semibold">
                        {driver.experience} years
                      </span>
                    </span>
                    <span className="text-xs lg:text-sm">
                      {driver.minutes_away} mins away
                    </span>
                    <span className="text-xs lg:text-sm font-medium">
                      Capacity:{" "}
                      <span className="font-semibold">
                        {driver.vehicle_capacity}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col justify-between h-full lg:items-end">
                    <span className="text-base lg:text-2xl font-semibold text-primary">
                      NGN {driver.estimated_price}{" "}
                      <sub className="text-sm">est</sub>
                    </span>

                    <div
                      className="text-xs lg:text-sm flex items-center gap-x-1 py-3 lg:py-0 font-medium underline underline-offset-4 hover:cursor-pointer"
                      onClick={() => handleDetails(driver.id)}
                    >
                      <span>See details</span>

                      <IoIosArrowDown
                        color={"#3e3e3e"}
                        className={`-rotate-90 transition-all ease-in hover:cursor-pointer ${
                          selectedDriver === driver.id && "rotate-0"
                        }`}
                        fontSize={20}
                      />
                    </div>
                  </div>
                </div>
              </div>{" "}
              {selectedDriver === driver.id && (
                <div className="relative flex flex-col gap-y-4 mt-8">
                  {isLoading && (
                    <div className="absolute left-[40%] top-[30%]">
                      <div className="flex items-center justify-center h-full">
                        <div className="bg-primary text-white text-xl p-8 rounded-lg">
                          <span>Loading...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {isRequestSent && (
                    <div className="absolute left-[30%] top-[20%]">
                      <div className="flex items-center flex-col justify-center h-full">
                        <div className="bg-primary flex text-xl gap-y-3 font-semibold flex-col text-white p-8 rounded-lg">
                          <span>Request Sent Successfully!</span>
                          <Button className={'w-full'} onClick={handleCloseRequestSentModal}>
                            Close
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-base font-medium w-[30%]">
                      Description
                    </span>
                    <span className="text-sm text-lightgray font-medium">
                      {driver.vehicle_description}
                    </span>
                  </div>
                  {/* <div className="flex flex-col">
                    <span>Vehicle images</span>
                    <div className="flex justify-between"></div>
                  </div> */}
                  <div className="flex flex-col">
                    <span className="text-base font-medium lg:w-[30%]">
                      Overall rating
                    </span>
                    <div className="text-sm flex items-end gap-x-2 text-lightgray font-medium">
                      <ReactStars
                        count={driver.count}
                        edit={false}
                        size={20}
                        color="#ffd700"
                      />
                      <span>{driver.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-x-2">
                    <div className="flex items-center gap-x-2">
                      <span className="text-base font-medium">Reviews</span>
                      <IoIosArrowDown
                        color={"#3e3e3e"}
                        className={`-rotate-90 transition-all ease-in hover:cursor-pointer ${
                          selectedReview === driver.id && "rotate-0"
                        }`}
                        size={10}
                        onClick={() => handleReviews(driver.id)}
                      />
                    </div>
                    {selectedReview === driver.id && (
                      <div className="flex gap-y-2 flex-col">
                        {driver.reviews.map((review) => (
                          <div className="flex flex-col gap-x-2">
                            <span className="text-sm" key={review.id}>
                              {review.content} -{" "}
                            </span>
                            <span
                              className="text-xs font-medium"
                              key={review.id}
                            >
                              {review.reviewer}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-medium lg:w-[30%]">
                      Availabillity and Scheduling
                    </span>
                    {driver.availability.map((availability) => (
                      <span className="text-sm text-lightgray font-medium">
                        {availability}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-medium lg:w-[30%]">
                      Notable achievement
                    </span>
                    <span className="text-sm text-lightgray font-medium">
                      {driver.achievement}
                    </span>
                  </div>

                  <div className="flex items-center px-4 justify-between py-5 shadow-xl w-full">
                    <div
                      className="flex gap-x-2 lg:w-[40%] items-center"
                      onClick={handleModal}
                    >
                      <span>Cash</span>
                      <IoIosArrowDown
                        color={"#3e3e3e"}
                        className={`-rotate-90 transition-all ease-in hover:cursor-pointer ${
                          paymentModal && "rotate-0"
                        }`}
                        fontSize={20}
                      />
                    </div>
                    <Button
                      className="lg:w-[40%]"
                      padding={""}
                      onClick={handleRequest}
                    >
                      Request {driver.name}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Loading Modal */}

      {/* Request Sent Modal */}
    </div>
  );
};

export default ChooseDriver;
