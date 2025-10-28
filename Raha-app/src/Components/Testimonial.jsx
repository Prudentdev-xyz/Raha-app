import React from "react";
import { TestimonialCard, Testimonialdata } from "./TestimonialCard";
import { Campaigndata } from "./CampaignCard";
import arrowLeft from "/arrowLeft.svg"
import arrowRight from "/arrowRight.svg"

export const Testimonial = () => {
  return (
    <div className="p-10 relative">
      <div>
        <p className="font-semibold text-2xl text-primary tracking-widest">
          TESTIMONIAL
        </p>
        <h2 className="text-3xl font-semibold space-x-11 max-w-xl pt-3">
          Community Feedback on Our Mission
        </h2>
      </div>

      <div className="flex gap-6 py-25">
        {Testimonialdata.map((Campaigndata) => (
          <TestimonialCard
            QuoteImg={Campaigndata.QuoteImg}
            texts={Campaigndata.texts}
            img={Campaigndata.img}
            Name={Campaigndata.Name}
            Work={Campaigndata.Work}
          />
        ))}
      </div>
      <div className="flex gap-2 absolute right-25 top-20">
        <div className="h-10 w-10 bg-tetiary border border-primary rounded-full">
          <img src={arrowLeft} className="pt-2 pl-2" />
        </div>

        <div className="h-10 w-10 bg-primary border border-tetiary rounded-full">
          <img src={arrowRight} className="pt-2 pl-2"/>
        </div>
      </div>
    </div>
  );
};
