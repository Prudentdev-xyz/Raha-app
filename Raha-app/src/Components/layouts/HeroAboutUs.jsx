import React from "react";
import AboutHeroPics from "/AboutHeroPics.svg";
import { DonatenewButton } from "../buttons/DonatenewButton";

export const HeroAboutUs = () => {
  return (
    <div>
      <img
        src={AboutHeroPics}
        alt="AboutHeroPics"
        className="h-full md:h-120 w-150"
      />
      <div>
        <p className="text-sm md:text-xl font-bold text-primary tracking-widest">
          Start Donations
        </p>
        <h2 className="text-xl md:text-3xl font-semibold space-x-5 md:spzce-x-11 max-w-sm md:max-w-lg">
          Supporting One Another to Create a Better World
        </h2>
        <p className="max-w-2xl md:max-w-2xl text-gray space-y-2 md:space-y-4">
          Supporting one another is one of the most powerful ways we can make a
          positive impact in the world. When we extend a helping hand, we
          strengthen our communities, uplift those in need, and build a
          foundation of kindness that benefits everyone. Small acts of
          generosity and compassion can inspire others to do the same, creating
          a ripple effect that reaches far beyond what we can see. By working
          together and looking out for each other, we foster a world where
          empathy and cooperation thrive, making it a better place for future
          generations.
        </p>
        <div className="pt-10 pb-20">
            <DonatenewButton>Donate Now</DonatenewButton>
        </div>

        <div>
           
        </div>
      </div>
    </div>
  );
};
