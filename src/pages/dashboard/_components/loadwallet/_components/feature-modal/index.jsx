import React from "react";

const FeatureModal = () => {
  return (
    <div className="bg-white rounded-[20px] w-full">
      <div className="flex px-6 py-8 flex-col">
        <span className="text-primary text-3xl font-bold">How to use LoadWallet</span>
        <div className="flex flex-col px-6 pt-6">
            <ul className="text-base flex flex-col gap-y-3 font-medium">
                <li style={{listStyle: 'disc'}}> Follow the instructions to set up your LoadWallet account</li>
                <li style={{listStyle: 'disc'}}>As a driver, when it's time for payment, access the LoadWallet feature. Simply request the amount required for moving the load directly on the platform. Provide all the necessary details, such as the load information and the payment amount.</li>
                <li style={{listStyle: 'disc'}}>Customers will receive the payment request and can conveniently review it within the LoadConnect platform. They can verify the details of the payment request, ensuring accuracy and alignment with the agreed terms. With a simple click, they can approve the payment.</li>
                <li style={{listStyle: 'disc'}}>Once the payment request is approved, the funds will be transferred from the Customer's LoadWallet account to the driver's LoadWallet account. This process ensures a seamless and efficient transaction, avoiding the delays associated with traditional transfers.</li>
           
            </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;
