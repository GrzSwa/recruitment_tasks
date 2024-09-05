import React from "react";
import { SeoElement } from "./components/seo_element";
export const SEO = () => {
  return (
    <div className="w-full bg-background-secondary">
      <section
        id="FaQ"
        className="w-[1440px] m-auto py-[88px] flex flex-col gap-20 bg-background-secondary"
      >
        <div className="w-[1200px] m-auto flex flex-row justify-between">
          <SeoElement />
          <SeoElement />
        </div>
      </section>
    </div>
  );
};
