import React from "react";

const ServicesCard = () => {
  return (
    <section className="container px-0 overflow-hidden mb-32 md:mb-40">
      <div className="container container-md mx-auto">
        <div className="flex flex-col gap-4 px-8 w-full">
          <span className="lg:text-5xl text-2xl !leading-[1.3] text-[#131a53] font-semibold">
            Benefits of using LoadWallet.
          </span>
          <span className="text-lightgray lg:w-1/2 lg:text-lg">
          LoadWallet offers a convenient payment solution within the LoadConnect platform. Users can seamlessly request and approve payments with just a few clicks, eliminating the need for traditional transfer methods and streamlining the payment process. <br /> <br />
          </span>
          <span className="text-lightgray lg:w-1/2 lg:text-lg">
          By using LoadWallet, both drivers and customers can save valuable time. Drivers can easily request payment directly on the platform, while customers can quickly review and approve the payment requests. This removes the need for manual payment requests and reduces administrative tasks, resulting in more efficient transactions.
          </span>

        
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
