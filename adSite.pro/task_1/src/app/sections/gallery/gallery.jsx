import React from "react";
import { Header } from "./components/header";
import { GalleryMenu } from "./components/gallery_menu";
import { Swiper } from "./components/swiper";

export const Gallery = () => {
  return (
    <section
      id="Galeria zdjęć"
      className="w-full m-auto flex flex-col gap-6 bg-background-primary overflow-hidden"
    >
      <div className="flex flex-col gap-6 w-full pt-[80px]">
        <Header />
        <GalleryMenu />
      </div>
      <div className="w-[1264px] py-[80px] m-auto">
        <Swiper />
      </div>
    </section>
  );
};
