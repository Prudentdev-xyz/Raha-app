import { DonatenewButton } from "./buttons/DonatenewButton";
import img1 from "/campaign1.svg";
import img2 from "/campaign2.svg";
import img3 from "/campaign3.svg";

export const Campaigndata = [
  {
    img: img1,
    header: "Charity's Mission to Educate Underprivileged Children",
    text: "With a focus on providing quality education to children in need",
    number: "$25,294",
    raisedNo: "raised of $100,000 goal",
    donate: "Donate Now",
  },
  {
    img: img2,
    header: "A Charity's School-Building Initiative for Vulnerable Youth",
    text: "Through dedicated efforts, this initiative aims to give underprivileged",
    number: "$75,294",
    raisedNo: "raised of $100,000 goal",
    donate: "Donate Now",
  },
  {
    img: img3,
    header: "Charity Builds Schools to Uplift Communities",
    text: "This charity believes every child deserves a quality education. ",
    number: "$45,254",
    raisedNo: "raised of $100,000 goal",
    donate: "Donate Now",
  },
];

import React from "react";

export const CampaignCard = ({
  img,
  header,
  text,
  number,
  raisedNo,
  donate,
}) => {

  return (
    <div className="border-white border-4 py-5 px-15 md:px-10 md:p-6 hover:shadow-lg hover:border-0 flex flex-col gap-4">
      <img src={img} alt="campaign img" className="h-50 w-80 md:h-100 md:w-150 flex items-center justify-center mx-auto"/>
      <h1 className="font-bold md:font-medium text-sm md:text-2xl items-center max-w-3xl md:max-w-sm">{header}</h1>
      <p className="text-gray font-regular text-xs md:text-sm max-w-sm">{text}</p>
      <div>
      <p className="flex  flex-row gap-1">
        <span className="text-sm pb-1 md:text-xl font-bold">{number}</span>{" "} <p className="font-light text-sm md:text-lg text-gray">{raisedNo}</p>
      </p>
      <div className="flex relative">
        <p className="h-[8px] w-[230px] md:h-[14px] md:w-[490px] bg-secondary/50 rounded-full relative"></p>
        <p className="h-[8px] w-[100px] md:h-[14px] md:w-[295.42px] bg-secondary rounded-full left absolute"></p>
      </div>
      </div>
      <div className="pt-1 md:pt-3">
      <DonatenewButton>{donate}</DonatenewButton>
      </div>
    </div>
  );
};
