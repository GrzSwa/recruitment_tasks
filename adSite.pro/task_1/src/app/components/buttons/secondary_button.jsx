import React from "react";

export const SecondaryButton = ({ children, className }) => {
  return (
    <button
      className={`rounded-lg border border-primary py-3 px-6 text-primary  ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};
