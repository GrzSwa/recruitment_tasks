import React from "react";

export const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`bg-primary rounded-lg py-3 px-6 hover:bg-primary-hover text-white ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};
