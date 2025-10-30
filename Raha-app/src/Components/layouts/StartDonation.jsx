import React from "react";
import { CampaignCard, Campaigndata } from "../CampaignCard";

export const StartDonation = () => {
  return (
    <div className="relative items-center p-25 bg-neutral">
      <div>
        <p className="font-bold text-center text-primary tracking-widest text-xl">
          START DONATIONS
        </p>
        <p className="font-semibold mx-auto text-center text-3xl p-2 max-w-xl">
          Transparent Donations: See How You Make a Difference
        </p>
      </div>
      <div className="flex gap-10 pt-10 items-center justify-center mx-20">
        {Campaigndata.map((Campaigndata) => (
        <CampaignCard
        img={Campaigndata.img}
        header={Campaigndata.header}
        text={Campaigndata.text}
        number={Campaigndata.number}
        donate={Campaigndata.donate}
        raisedNo={Campaigndata.raisedNo}
        />
        ))}
      </div>
      <div>
        <img className="absolute left-0 top-0" src="/Donation-leaf-left.svg" />
        <img className="absolute right-0 top-0" src="/Donation-leaf-right.svg"/>
      </div>
    </div>
  );
}; 
