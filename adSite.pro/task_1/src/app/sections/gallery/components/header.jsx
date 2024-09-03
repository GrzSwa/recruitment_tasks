import React from "react";

export const Header = () => {
  return (
    <div className="w-[1264px] max-h-32 ">
      <div className="flex flex-col max-w-[434px] max-h-20">
        <h5 className="w-fit text-[21.5px] font-robotoCondensed font-normal leading-8 text-center text-primary">
          Prezentacja firmy
        </h5>
        <h1 className="uppercase font-bebas font-normal text-[40px] leading-[48px] text-[#1D1D1B]">
          Zobacz naszą galerię zdjęć
        </h1>
      </div>
    </div>
  );
};
