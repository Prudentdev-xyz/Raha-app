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
    <div className="bg-tetiary px-10 pt-5 pb-10">
      <img src={img} alt="CompletedProject" className="h-100 w-150 flex items-center justify-center" />
      <h1 className="font-medium text-3xl max-w-2xl text-black">{header}</h1>
      <p className="font-regular text-sm max-w-sm text-gray py-5">{text}</p>
      <PrimaryButton>{SeeProject}</PrimaryButton>
    </div>
  ); 
};
