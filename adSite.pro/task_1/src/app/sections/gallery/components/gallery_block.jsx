import React from "react";

export const GalleryCard = ({ children }) => {
  return <div className="w-[600px] h-[446px]">{children}</div>;
};

export const GalleryBlock = ({ children }) => {
  return <div className="w-[1264px] flex flex-row gap-16">{children}</div>;
};
