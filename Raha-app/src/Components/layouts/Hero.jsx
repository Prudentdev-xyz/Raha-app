import React from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { WatchnowButton } from "../buttons/WatchnowButton";
import { DonatenewButton } from "../buttons/DonatenewButton";

export const Hero = () => {
  return (
    <div className="relative items-center bg-cover bg-[url('/hero-bg.svg')]">
      <div className="p-52">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-8xl font-bold text-white text-center">
            Every Helping Hand, Every Heartfelt Change
          </h1>
          <p className="text-xl text-white text-center">
            Every helping hand brings heartfelt change, creating ripples of hope
            and compassion. Each act of kindness lifts lives, inspiring others
            and uniting us in a shared journey toward a brighter, more
            compassionate world.
          </p>
          <div className="flex justify-center gap-3">
            <WatchnowButton>Watch Video</WatchnowButton>
            <DonatenewButton>Donate Now</DonatenewButton>
          </div>
        </div>
      </div>
      <img className="absolute right-20 -bottom-24" src="/hero-plastic.svg" />
      <img className="absolute right-0 -top-9" src="/hero-hand.png" />
    </div>
  );
};
