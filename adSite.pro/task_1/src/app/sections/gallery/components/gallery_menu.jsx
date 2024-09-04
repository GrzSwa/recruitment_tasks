import React from "react";

export const GalleryMenu = () => {
  return (
    <div className="w-[1264px] m-auto">
      <ul class="w-fit flex flex-row justify-start gap-12 p-1 list-none">
        <li class="text-center">
          <span class="border-b-[1px] text-primary hover:cursor-pointer">
            Samochody osobowe
          </span>
        </li>
        <li class="text-center hover:cursor-pointer">
          <span class="">Samochody dostawcze</span>
        </li>
      </ul>
    </div>
  );
};
