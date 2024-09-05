import React from "react";

export const GalleryMenu = ({ value, onChange }) => {
  return (
    <div className="w-[1264px] m-auto">
      <ul className="w-fit flex flex-row justify-start gap-12 p-1 list-none">
        <li className="text-center">
          <button
            type="button"
            onClick={() => onChange("passengerCars")}
            className={`${
              value === "passengerCars"
                ? "border-b-[1px] text-primary hover:cursor-pointer"
                : ""
            }`}
          >
            Samochody osobowe
          </button>
        </li>
        <li className="text-center hover:cursor-pointer">
          <button
            type="button"
            onClick={() => onChange("vans")}
            className={`${
              value === "vans"
                ? "border-b-[1px] text-primary hover:cursor-pointer"
                : ""
            }`}
          >
            Samochody dostawcze
          </button>
        </li>
      </ul>
    </div>
  );
};
