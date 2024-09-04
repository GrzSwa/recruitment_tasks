import React from "react";
import { Header } from "./components/header";
import { GalleryMenu } from "./components/gallery_menu";
import { GalleryBlock, GalleryCard } from "./components/gallery_block";

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
      <div className="w-[1264px] flex py-[80px] flex-row gap-16 m-auto">
        <GalleryBlock>
          <GalleryCard>
            <img src="/cars/passenger/bmw.jpg" className="w-full h-full" />
          </GalleryCard>
          <GalleryCard>
            <img src="/cars/passenger/passat.jpg" className="w-full h-full" />
          </GalleryCard>
        </GalleryBlock>
        <GalleryBlock>
          <GalleryCard>
            <img src="/cars/passenger/ford.jpg" className="w-full h-full" />
          </GalleryCard>
          <GalleryCard>
            <img src="/cars/passenger/honda.jpg" className="w-full h-full" />
          </GalleryCard>
        </GalleryBlock>
      </div>
      <div className="w-20 h-6 m-auto">kropki</div>
    </section>
  );
};
