import React from "react";

const FeatureModal = () => {
  return (
    <div className="bg-white rounded-[20px] w-full">
      <div className="flex px-6 py-8 flex-col">
        <span className="text-primary text-3xl font-bold">How to use LoadConnect</span>
        <div className="flex flex-col px-6 pt-6">
            <ul className="text-base flex flex-col gap-y-4 font-medium">
                <li style={{listStyle: 'disc'}}>Look for the "Post a Load" on the LoadConnect platform. Click on it to start the process</li>
                <li style={{listStyle: 'disc'}}>Provide all the necessary information about your load.</li>
                <li style={{listStyle: 'disc'}}>Determine the bidding options for the load. You can choose to set a specific price range and submit</li>
                <li style={{listStyle: 'disc'}}>Drivers on LoadConnect will see your load posting and have the opportunity to submit bids with their proposed prices</li>
                <li style={{listStyle: 'disc'}}> Evaluate the bids received based on factors such as price, driver ratings, equipment, and any other criteria that are important to you</li>
                <li style={{listStyle: 'disc'}}> Once you have selected a driver, communicate the final details, such as pickup and delivery schedules, payment terms, and any necessary documentation.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;
