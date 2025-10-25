import React from "react";
import { WatchnowButton } from "./buttons/WatchnowButton";

export const DonationNO = () => {
  return (
    <div className='relative bg-cover bg-[url("/Donation-No-bg.svg")]'>
      <div className="py-20">
        <div className="text-tetiary">
          <p className="flex items-center justify-center font-medium text-4xl max-w-3xl mx-auto">
            Join Our Community of Donors and Volunteers:
          </p>
          <p className="flex items-center justify-center font-medium text-4xl max-w-3xl mx-auto py-3">
            Be Part of Positive Change in the World
          </p>
          <h1 className="font-bold text-tetiary text-8xl flex items-center justify-center py-5">
            154,859+
          </h1>
          <p className="font-medium text-gray flex items-center justify-center pt-5 pb-2 text-3xl max-w-lg mx-auto">
            Join the Many Who Already Support
          </p>
          <p className="font-medium text-gray flex items-center justify-center text-3xl max-w-lg mx-auto">
            Our Mission
          </p>
        </div>
        <div className="flex items-center justify-center pt-10">
          <WatchnowButton>Join Our Community</WatchnowButton>
        </div>
        <div>
          <img
            className="absolute bottom-0 left-50"
            src="/envelopeDonation.svg"
          />
          <img className="absolute -top-5 left-20" src="/loveDonation.svg" />
        </div>
      </div>
    </div>
  );
};
