import React from "react";
import { Header } from "./components/header";
import { GalleryMenu } from "./components/gallery_menu";
import { GalleryBlock, GalleryCard } from "./components/gallery_block";
export const Gallery = () => {
  return (
    <section
      id="Galeria zdjęć"
      className="h-[825px] w-[1440px] m-auto bg-background-primary "
    >
      <div className="flex flex-col gap-6 w-[1440px] h-[207px] pl-20">
        <Header />
        <GalleryMenu />
      </div>
      <div className="w-max flex flex-row overflow-y-hidden gap-16 pl-20">
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
    </section>
  );
};
