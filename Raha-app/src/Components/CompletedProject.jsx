import CompletedProjectCamera from "/CompletedProjectCamera.svg"
import CompletedProjectHand from "/CompletedProjectHand.svg"

import React from "react";
import { CampaignCard } from "./CampaignCard";
import { CompletedProjectCard, CompletedProjectdata } from "./CompletedProjectCard";

export const CompletedProject = () => {
  return (
    <div className="bg-secondary p-25 relative">
      <div>
        <p className="font-bold text-primary tracking-widest text-xl text-center">
          OUR COMPLETED PROJECTS
        </p>
        <p className="font-semibold mx-auto text-center text-3xl p-2 max-w-3xl">
          A Comprehensive Collection of Completed Projects That Reflect Our
          Dedication, Skill, and Excellence
        </p>
      </div>

      <div className="flex gap-10 pt-5 items-center justify-center mx-20">
        {CompletedProjectdata.map((CompletedProjectdata) => (
        <CompletedProjectCard
        img={CompletedProjectdata.img}
        header={CompletedProjectdata.header}
        text={CompletedProjectdata.text}
        SeeProject={CompletedProjectdata.SeeProject}
        />
        ))}
      </div>

      <div>
    <img src={CompletedProjectCamera} className="absolute right-0 top-4"/>
    <img src={CompletedProjectHand} className="absolute left-0 top-0"/>
      </div>
    </div>
  );
};
