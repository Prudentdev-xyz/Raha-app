import React from "react";

export const Campaigndata = [
  {
    img: img1,
    header: "Charity's Mission to Educate Underprivileged Children",
    text: "With a focus on providing quality education to children in need",
    number: "$25,294",
    raisedNo: "raised of $100,000 goal",
    donate: "Donate Now",
  },
];

export const Testimonial = () => {
  return (
    <div className="p-25">
      <div>
        <p className="font-semibold text-2xl text-primary tracking-widest">
          TESTIMONIAL
        </p>
        <h2 className="text-3xl font-semibold space-x-11 max-w-xl pt-3">
          Community Feedback on Our Mission
        </h2>
      </div>
    </div>
  );
};
