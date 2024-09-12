import { useState, useEffect } from "react";
import { SeoElement } from "./components/seo_element";
import { useCarsContext } from "../../../context/cars_context/cars_context";

export const SEO = () => {
  const [seoData, setSeoData] = useState([]);
  const { seo, loading } = useCarsContext();

  useEffect(() => {
    setSeoData(seo);
  }, [loading]);

  return (
    <div className="w-full bg-background-secondary">
      <section
        id="FaQ"
        className="m-auto py-[88px] flex flex-col gap-20 bg-background-secondary"
      >
        <div className="w-[1200px] m-auto flex flex-row justify-between">
          {seoData.map((item, index) => (
            <SeoElement
              key={index}
              header={item.header}
              content={item.content}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
