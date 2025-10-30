import React from "react";
import RahaLogo from "/RahaLogo.svg";
import { WatchnowButton } from "../buttons/WatchnowButton";
import { DonatenewButton } from "../buttons/DonatenewButton";

export const FooterLinks = [
    {
        link: "",
        text: "",
    },
    {
        
    }
]

export const Footer = () => {
  return (
    <div>
      <div>
        <img src={RahaLogo} />
        <p>
          Great futures are built with the support of small charities that
          create meaningful change in their communities. By addressing local
          needs with compassion, these organizations lay the foundation for
          brighter tomorrows and empower individuals and families to thrive.
        </p>
        <div>
            <WatchnowButton>Donate Now</WatchnowButton>
            <DonatenewButton>Contact us</DonatenewButton>
        </div>
      </div>
    </div>
  );
};
