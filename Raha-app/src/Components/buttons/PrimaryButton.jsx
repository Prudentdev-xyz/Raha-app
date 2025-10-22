import React, { Children } from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-primary text-white px-8 py-4 text-xl font-medium rounded-full">
      {children}
    </button>
  );
};
