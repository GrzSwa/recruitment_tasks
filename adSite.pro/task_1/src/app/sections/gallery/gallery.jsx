import React, { useEffect, useState } from "react";
import { Header } from "./components/header";
import { GalleryMenu } from "./components/gallery_menu";
import { Swiper } from "./components/swiper";
import { useCarsContext } from "../../../context/cars_context/cars_context";

export const Gallery = () => {
  const [cars, setCars] = useState([]);
  const { passengerCars, vans, loading } = useCarsContext();
  const [carsCategory, setCarsCategory] = useState("passengerCars");

  const changeCarsCategory = (value) => {
    if (value === "passengerCars") {
      setCars(passengerCars);
    } else {
      setCars(vans);
    }
    setCarsCategory(value);
  };

  useEffect(() => {
    if (carsCategory === "passengerCars") {
      setCars(passengerCars);
    } else if (carsCategory === "vans") {
      setCars(vans);
    }
  }, [loading]);

  return (
    <section
      id="Galeria zdjęć"
      className="w-full m-auto flex flex-col gap-6 bg-background-primary overflow-hidden"
    >
      <div className="flex flex-col gap-6 w-full pt-[80px]">
        <Header />
        <GalleryMenu value={carsCategory} onChange={changeCarsCategory} />
      </div>
      <div className="w-[1264px] py-[80px] m-auto">
        <Swiper data={cars} />
      </div>
    </section>
  );
};
