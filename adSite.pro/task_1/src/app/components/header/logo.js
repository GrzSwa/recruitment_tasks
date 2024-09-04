import React from "react";

export const Logo = () => {
  return (
    <div className="flex flex-row w-[300px] h-[30px] justify-start items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26px"
        height="28px"
        viewBox="0 0 24 24"
      >
        <path
          fill="#0147FF"
          d="M11 9.47V11h3.76L13 14.53V13H9.24zM13 1L6 15h5v8l7-14h-5z"
        />
      </svg>
      <div>
        <span className="text-primary font-bold text-[28px]">Cars</span>
        <span className="text-black font-bold  text-[28px]">Spot</span>
      </div>
    </div>
  );
};
