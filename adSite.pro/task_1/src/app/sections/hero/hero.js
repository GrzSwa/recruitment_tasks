import React from "react";
import { Header } from "./components/header";
import { Paragraph } from "./components/paragraph";
import { SecondaryButton } from "../../components/buttons/secondary_button";
import { PrimaryButton } from "../../components/buttons/primary_button";
import { CarsImage } from "./components/cars_image";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[825px] w-[1440px] m-auto py-[120px] bg-background-primary relative"
    >
      <main className=" w-[1200px] max-h-[343px] m-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <Header />
            <Paragraph />
          </div>
          <div className="flex flex-row w-full max-w-[1220px] gap-6">
            <PrimaryButton>Zobacz zdjęcia</PrimaryButton>
            <SecondaryButton>Zadzwoń do nas</SecondaryButton>
          </div>
        </div>
        <div className="flex justify-end absolute top-[328px] right-0">
          <CarsImage />
        </div>
      </main>
    </section>
  );
};
