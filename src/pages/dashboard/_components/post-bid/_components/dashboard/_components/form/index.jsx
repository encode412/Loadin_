import React, { useState } from "react";
import { Button } from "../../../../../../../../components";
import { setLoadForm } from "../../../../../../../../redux/features/locationSlice";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const loadForm = useSelector(
    (state) => state.locationstate?.locationState?.loadForm
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    estimatedWeight: "",
    dimensions: "",
    pickupLocation: "",
    deliveryLocation: "",
    preferredDate: "",
    specialRequirements: "",
    budget: "",
    negotiable: "yes",
    loadType: "generalCargo",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional actions with the form data
    dispatch(setLoadForm(formData));
  };
  console.log(loadForm)
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
                value={formData.estimatedWeight}
                onChange={handleChange}
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="E.g: 50kg"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="dimensions">Dimensions</label>
              <input
                type="text"
                id="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="E.g: 2m x 1m x 1.5m"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="pickupLocation">Pickup Location</label>
              <input
                type="text"
                id="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="Enter pickup location"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="deliveryLocation">Delivery Location</label>
              <input
                type="text"
                id="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={handleChange}
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="Enter delivery location"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="specialRequirements">Special Requirements</label>
              <textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="Enter any special requirements or instructions"
              ></textarea>
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="budget">Budget</label>
              <input
                type="text"
                id="budget"
                value={formData.budget}
                onChange={handleChange}
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
                placeholder="Enter your budget"
              />
            </div>
            <div className="flex gap-y-1 flex-col">
              <label htmlFor="negotiable">Negotiable</label>
              <select
                id="negotiable"
                value={formData.negotiable}
                onChange={handleChange}
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
                value={formData.loadType}
                onChange={handleChange}
                className="bg-[#e4e4e4] w-full rounded-[5px] px-3 py-2"
              >
                <option value="generalCargo">General Cargo</option>
                <option value="perishableGoods">Perishable Goods</option>
                <option value="hazardousMaterials">Hazardous Materials</option>
                <option value="other">Other</option>
              </select>
            </div>
            <Button className="w-full mt-4" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
