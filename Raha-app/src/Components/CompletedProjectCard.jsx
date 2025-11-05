import { DonatenewButton } from "./buttons/DonatenewButton";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { WatchnowButton } from "./buttons/WatchnowButton";
import Completed1 from "/Completed1.svg"
import Completed2 from "/Completed2.svg"
import Completed3 from "/Completed3.svg"

export const CompletedProjectdata = [
  {
    img: Completed1,
    header: "Charity's Mission to Educate Underprivileged Children",
    text: "With a focus on providing quality education to children in need, this charity is building schools that offer new opportunities for brighter futures.",
    SeeProject: "See Project",
  },
  {
    img: Completed2,
    header: "A Charity's School-Building Initiative for Vulnerable Youth", 
    text: "Through dedicated efforts, this initiative aims to give underprivileged children a safe space to learn, grow, and achieve their dreams.",
    SeeProject: "See Project",
  },
  {
    img: Completed3,
    header: "Charity Builds Schools to Uplift Communities",
    text: "This charity believes every child deserves a quality education. By constructing schools, they're paving the way for lasting community transformation.",
    SeeProject: "See Project",
  }
];

import React from "react";

export const CompletedProjectCard = ({img, header, text, SeeProject}) => {
  return (
    <div className="bg-tetiary px-25 pt-3 md:pt-5 pb-5 md:pb-10">
      <img src={img} alt="CompletedProject" className="h-50 w-80 md:h-100 md:w-150 flex items-center justify-center mx-auto" />
      <h1 className="font-medium text-lg md:text-3xl max-w-2xl text-black text-center items-center">{header}</h1>
      <p className="font-regular text-xs md:text-sm max-w-xl md:max-w-sm text-gray py-5">{text}</p>
      <PrimaryButton>{SeeProject}</PrimaryButton>
    </div>
  ); 
};
