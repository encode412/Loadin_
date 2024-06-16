import React, { useState } from "react";
import { Button } from "../../../../../../../../components";
import { setLoadForm } from "../../../../../../../../redux/features/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const loadForm = useSelector(
    (state) => state.locationstate?.locationState?.loadForm
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const [errorState, setErrorState] = useState({
    estimatedWeightError: "",
    dimensionsError: "",
    pickupLocationError: "",
    deliveryLocationError: "",
    preferredDateError: "",
    specialRequirementsError: "",
    budgetError: "",
  });

  const validate = () => {
    let isError = false;
    const errors = {
      estimatedWeightError: "",
      dimensionsError: "",
      pickupLocationError: "",
      deliveryLocationError: "",
      preferredDateError: "",
      specialRequirementsError: "",
      budgetError: "",
    };

    if (!formData.estimatedWeight) {
      isError = true;
      errors.estimatedWeightError = "Please enter an estimated weight";
    }
    if (!formData.dimensions) {
        isError = true;
        errors.dimensionsError = "Please enter the load dimensions";
      }
      if (!formData.pickupLocation) {
        isError = true;
        errors.pickupLocationError = "Please enter the pickup location";
      }
      if (!formData.deliveryLocation) {
        isError = true;
        errors.deliveryLocationError = "Please enter the delivery location";
      }
      if (!formData.preferredDate) {
        isError = true;
        errors.preferredDateError = "Please enter a preferred date";
      }
      if (!formData.specialRequirements) {
        isError = true;
        errors.specialRequirementsError = "Please enter load requirements";
      }
      if (!formData.budget) {
        isError = true;
        errors.budgetError = "Please enter your budget";
      }

    setErrorState({ ...errorState, ...errors });
    return isError;
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();

    if (!error) {
      dispatch(setLoadForm(formData));
      navigate("bids");
    }

    // Perform any additional actions with the form data
  };
  console.log(loadForm);
  return (
    <div className="h-[130vh] flex items-center w-full justify-center">
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
              <span className="text-[#e43d3d] text-xs md:text-sm">{errorState.estimatedWeightError}</span>
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
              <span className="text-[#e43d3d] text-xs md:text-sm">{errorState.dimensionsError}</span>
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
              <span className="text-[#e43d3d] text-xs md:text-sm">{errorState.pickupLocationError}</span>
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
              <span className="text-[#e43d3d] text-xs md:text-sm">{errorState.deliveryLocationError}</span>
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
              <span className="text-[#e43d3d] text-xs md:text-sm">{errorState.preferredDateError}</span>
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
              <span className="text-[#e43d3d] text-xs md:text-sm">{errorState.specialRequirementsError}</span>
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
              <span className="text-[#e43d3d] text-xs md:text-sm">{errorState.budgetError}</span>
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
