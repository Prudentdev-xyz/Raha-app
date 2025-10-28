import React from "react";
import { WatchnowButton } from "./buttons/WatchnowButton";

export const NewsLetter = () => {
  return (
    <div className="bg-primary p-25">
      <h1 className="text-tetiary font-semibold text-4xl nx-auto items-center justify-center flex pt-5">Subscribe to our Newsletter</h1>
      <p className="text-gray font-regular flex text-center justify-center text-sm max-w-3xl mx-auto py-5">Subscribe to our newsletter to stay updated with the latest news, exclusive content, and special offers! Join our community and be the first to know about exciting events and opportunities. Don’t miss out, sign up today!</p>
      
      <div className="pt-3 flex gap-3 items-center justify-center">
        <input type="email"  placeholder="Enter your email address" id="" className="rounded-full bg-tetiary/10 h-15 w-120 px-4 placeholder:text-gray border-0"/>
        <WatchnowButton>Subscribe</WatchnowButton>
      </div>
    </div>
  );
};
