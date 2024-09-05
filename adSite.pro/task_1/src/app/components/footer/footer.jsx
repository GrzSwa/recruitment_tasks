import React from "react";

const CompanyName = ({ text }) => (
  <h3 className="min-w-[63px] min-h-[24px] font-robotoCondensed font-bold text-[16px] leading-6 mb-4 text-center text-white">
    {text}
  </h3>
);

const PrivacyPolicyButton = () => (
  <button className="min-w-[63px] min-h-[24px] underline font-robotoCondensed font-normal text-[16px] leading-6 mb-4 text-center text-white hover:text-primary">
    Polityka prywatności
  </button>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-background-secondary border-t-[1px]  border-white ">
      <main className="w-[1440px] m-auto flex flex-row justify-between px-[120px] py-6 bg-background-secondary ">
        <CompanyName text="Cars Spot" />
        <PrivacyPolicyButton />
      </main>
    </footer>
  );
};
