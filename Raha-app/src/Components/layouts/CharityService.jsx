import React from "react";
import { Header } from "./Header";
import { Servicedatas, ServiceCards } from "../ServiceCard";
import CharityLeaf from "/Charity-leaf.svg";

export const CharityService = () => {
  return (
    <div className="relative items-center">
      <div className="px-20 py-30 flex justify-between gap-10">
        <div>
          <p className="text-xl font-bold text-primary tracking-widest">
            CHARITY SERVICE
          </p>
          <h2 className="text-3xl font-semibold space-x-11 max-w-xl">
            Dedicated to Everyone – Compassionate Service for All People
            Everywhere
          </h2>
        </div>

        <div className="flex max-w-4xl space-y-4 items-end justify-end pl-80 text-gray">
          Dedicated to Everyone – Compassionate Service for All People
          Everywhere means reaching all individuals with the care and support
          they need.
        </div>
      </div>

      <div className="flex gap-5 justify-between relative p-20">
        {Servicedatas.map((Servicedata) => (
          <ServiceCards
            text={Servicedata.text}
            header={Servicedata.header}
            img={Servicedata.img}
          />
        ))}
      </div>
      <div>
        <img src={CharityLeaf} className="absolute right-0 top-2" />
      </div>
    </div>
  );
};
