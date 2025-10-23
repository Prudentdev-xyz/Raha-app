import React from "react";

export const DonatenewButton = ({ children }) => {
  return (
    <button className="bg-primary text-white px-8 py-4 text-xl font-medium rounded-full border-tetiary border-2">
      {children}
    </button>
  );
};
