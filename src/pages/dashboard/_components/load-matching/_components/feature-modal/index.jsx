import React from "react";

const FeatureModal = () => {
  return (
    <div className="bg-white rounded-[20px] w-full">
      <div className="flex px-6 py-8 flex-col">
        <span className="text-primary text-3xl font-bold">
          How to use LoadMatching
        </span>
        <div className="flex flex-col px-6 pt-6">
          <ul className="text-base flex flex-col gap-y-3 font-medium">
            <li style={{ listStyle: "disc" }}>
              Provide detailed information about your load, including origin,
              destination, load type, weight, and any specific requirements or
              preferences. Posting your load accurately and comprehensively
              increases the chances of the system matching you to the right
              driver
            </li>
            <li style={{ listStyle: "disc" }}>
              Drivers can access the LoadMatching feature and use search filters
              to find suitable loads. Filters may include origin, destination,
              load type, weight range, and other criteria
            </li>
            <li style={{ listStyle: "disc" }}>
              {" "}
              After reaching an agreement, the shipper and carrier can finalize
              the load transportation arrangement. This includes confirming the
              pick-up and delivery details, establishing the payment terms, and
              ensuring all necessary documentation is in order.
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;
