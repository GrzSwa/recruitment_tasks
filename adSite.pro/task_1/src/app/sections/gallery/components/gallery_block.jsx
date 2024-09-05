import React from "react";

export const GalleryCard = ({ children, className }) => {
  return <div className="w-[600px] h-[446px]">{children}</div>;
};

export const GalleryBlock = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};
