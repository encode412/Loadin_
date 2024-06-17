import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../../../../../../../components";
import AvailableDrivers from "../available-drivers";

const Review = () => {
  const loadForm = useSelector(
    (state) => state.locationstate?.locationState?.loadForm
  );

  return (
    <div className="pt-40 gap-x-10 lg:flex-row flex-col flex gap-y-10 items-center lg:items-start justify-between w-full px-8 lg:px-20">
      <div className="flex gap-y-8 lg:text-base text-sm border w-full lg:w-[35%] p-10 border-[#bebebe] flex-col">
        <p>
          <strong>Estimated Weight: </strong>
          {loadForm.estimatedWeight}
        </p> 
        <p>
          <strong>Dimensions: </strong>
          {loadForm.dimensions}
        </p>
        <p>
          <strong>Pickup Location: </strong>
          {loadForm.pickupLocation}
        </p>
        <p>
          <strong>Delivery Location: </strong>
          {loadForm.deliveryLocation}
        </p>
        <p>
          <strong>Preferred Date: </strong>
          {loadForm.preferredDate}
        </p>
        <p>
          <strong>Special requirements: </strong>
          {loadForm.specialRequirements}
        </p>
        <p>
          <strong>Budget: </strong>
          {loadForm.budget}
        </p>
        <p>
          <strong>Negotiable: </strong>
          {loadForm.negotiable}
        </p>
        <p>
          <strong>Load type: </strong>
          {loadForm.loadType}
        </p>
        <Button className="w-full">Edit</Button>
      </div>
      <div className="w-full">
        <AvailableDrivers />
      </div>
    </div>
  );
};

export default Review;
