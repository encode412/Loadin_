import React, { useState, useEffect } from "react";
import { Button } from "../../../../components";
import { setPaymentModal } from "../../../../redux/features/eventSlice";
import { useDispatch } from "react-redux";

const PaymentModal = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const [loadingId, setLoadingId] = useState("");

  const handleClose = () => {
    dispatch(setPaymentModal(false));
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSave = () => {
    if (selectedOption === "share" && !loadingId) {
      setError("Please enter a Loadin ID or email.");
    } else if (selectedOption === "share" && loadingId) {
      setError("");
      setShowAlert("share");
    } else if (selectedOption === "cash") {
      setError("");
      setShowAlert("cash");
    } else {
      // Perform save operation or any necessary checks/validation
      // For other options or scenarios, you can add appropriate logic here
    }
  };

  const handleInputChange = (e) => {
    setError("");
    setLoadingId(e.target.value);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="bg-white px-4 py-3 relative">
      <span
        className="absolute right-4 text-xl font-semibold"
        onClick={handleClose}
      >
        x
      </span>
      <div className="flex flex-col py-5 gap-y-8">
        <span className="text-primary font-semibold text-2xl">
          Payment options
        </span>
        <div className="flex justify-between pt-4 w-full">
          <span className="text-lg font-medium">Cash</span>
          <input
            type="radio"
            name="paymentOption"
            id="cashOption"
            checked={selectedOption === "cash"}
            onChange={() => handleOptionChange("cash")}
          />
        </div>
        <div className="flex justify-between w-full">
          <span className="text-lg font-medium">Share cost with friends</span>
          <input
            type="radio"
            name="paymentOption"
            id="shareOption"
            checked={selectedOption === "share"}
            onChange={() => handleOptionChange("share")}
          />
        </div>
        {selectedOption === "share" && (
          <div className="flex gap-y-2 flex-col">
            <label htmlFor="loadingId" className="text-lg font-medium">
              Enter Loadin ID or email
            </label>
            <input
              type="text"
              maxLength={9}
              minLength={9}
              placeholder="LDN123ASW"
              className="outline-none bg-[#eee] uppercase font-medium w-full py-2 px-4"
              id="loadingId"
              onChange={handleInputChange}
            />
          </div>
        )}
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex justify-between w-full">
          <span className="text-lg font-medium">Add payment</span>
          <span className="text-xl font-semibold">+</span>
        </div>
        <Button className="w-full" onClick={handleSave}>
          Save
        </Button>
        {showAlert === "share" && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Success!</strong> They've been
            notified of the share cost.
            <span
              className="absolute top-0 bottom-0 right-4 cursor-pointer"
              onClick={() => setShowAlert(false)}
            >
              x
            </span>
          </div>
        )}
        {showAlert === "cash" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Success!</strong> Payment added
            successfully.
            <span
              className="absolute top-0 bottom-0 right-4 cursor-pointer"
              onClick={() => setShowAlert(false)}
            >
              x
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
