import React from "react";
import { Button } from "../../../../../../../../components";

const Form = () => {
  return (
    <div className="md:h-[110vh] h-screen flex items-center w-full justify-center">
      <form
        action=""
        className="border border-lightgray mx-8 px-5 lg:px-10 w-full lg:w-1/2 py-8"
      >
        <div className="flex gap-y-3 flex-col">
          <span className="font-medium text-2xl text-primary">
            Submit Load details for bid
          </span>
          <div className="flex gap-y-2 flex-col">
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="estimatedWeight">Estimated Weight</label>
              <input
                type="text"
                id="estimatedWeight"
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="E.g: 50kg"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="dimensions">Dimensions</label>
              <input
                type="text"
                id="dimensions"
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="E.g: 2m x 1m x 1.5m"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="pickupLocation">Pickup Location</label>
              <input
                type="text"
                id="pickupLocation"
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="Enter pickup location"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="deliveryLocation">Delivery Location</label>
              <input
                type="text"
                id="deliveryLocation"
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="Enter delivery location"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="specialRequirements">Special Requirements</label>
              <textarea
                id="specialRequirements"
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="Enter any special requirements or instructions"
              ></textarea>
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="budget">Budget</label>
              <input
                type="text"
                id="budget"
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="Enter your budget"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="negotiable">Negotiable</label>
              <select
                id="negotiable"
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="loadType">Load Type</label>
              <select
                id="loadType"
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
              >
                <option value="generalCargo">General Cargo</option>
                <option value="perishableGoods">Perishable Goods</option>
                <option value="hazardousMaterials">Hazardous Materials</option>
                <option value="other">Other</option>
              </select>
            </div>
            <Button className='w-full mt-4'>Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
