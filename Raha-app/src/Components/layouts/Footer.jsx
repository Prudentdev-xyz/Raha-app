import React from "react";
import RahaLogo from "/RahaLogo.svg";
import { WatchnowButton } from "../buttons/WatchnowButton";
import { DonatenewButton } from "../buttons/DonatenewButton";
import FooterBottomFlower3 from "/FooterBottomFlower3.svg"

export const FooterLinks = [
    {
        link: "",
        text: "About Us",
    },
    {
        link:  "",
        text: "Our Story",
    },
    {
      link: "",
      text: "Fundraise",
    },
    {
      link: "",
      text: "Donate",
    },
    {
      link: "",
      text: "Fundraise",
    },
    {
      link: "",
      text: "Contact Us",
    },
    {
      link: "",
      text: "Instagram",
    },
    {
      link: "",
      text: "Twitter",
    },
    {
      link: "",
      text: "LinkedIn",
    }
]

export const Footer = () => {
  return (
    <div className="relative bg-primary">
      <div className="bg-primary  p-13 flex justify-between">
        <div>
        <img src={RahaLogo} className="pt-2" />
        <p className="text-gray max-w-2xl  font-regular text-lg py-5">
          Great futures are built with the support of small charities that
          create meaningful change in their communities. By addressing local
          needs with compassion, these organizations lay the foundation for
          brighter tomorrows and empower individuals and families to thrive.
        </p>
        <div className="pt-2 flex gap-5">
            <WatchnowButton>Donate Now</WatchnowButton>
            <DonatenewButton>Contact us</DonatenewButton>
        </div>
        </div>

      <div className="w-xl h-xl pt-3 text-lg">
        <ul className="text-tetiary gap-3 grid grid-rows-3 grid-flow-col">
          {FooterLinks.map((link) => (
           <li>{link.text}</li>
          ))}
        </ul>
      </div>
      </div>
      <div className="bg-primary pt-20">
        <img src={FooterBottomFlower3} alt="" className="absolute bottom-0 z-1"/>
      </div>
      <div className="bg-secondary top-9 p-2 flex items-center justify-center z-30 relative">
        ©Copyright 2024 Raha. All Right reserved.
      </div>
    </div>
  );
};
