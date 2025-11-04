import img1 from "/first-aid.svg";
import img2 from "/Water-drop.svg";
import img3 from "/Grass.svg";

export const Servicedatas = [
  {
    header: "Health for All",
    text: "Providing free health check-ups, medicine, and support for underserved populations.",
    img: img1,
  },
  {
    header: "Clean Water Access",
    text: "Installing water wells and purification systems in areas with limited access to clean water.",
    img: img2,
  },
  {
    header: "Eco Hope",
    text: "Organizing environmental projects such as tree planting, community clean-ups, and recycling programs.",
    img: img3,
  },
];

import React from "react";

export const ServiceCards = ({ text, header, img }) => {
  return (
    <div className="items-center border-2 border-stroke relative px-7 py-15 md:p-30">
      <h1 className="text-2xl font-bold">{header}</h1>
      <p className="text-gray max-w-lg space-y-5 space-x-5 text-sm">{text}</p>
      <img src={img} alt="serive img" className="absolute right-0 bottom-1" />
    </div>
  );
};
