import React, { useState, useEffect } from "react";
import { Logo } from "./logo";
import { Link } from "react-router-dom";
import { useCarsContext } from "../../../context/cars_context/cars_context";

export const Header = ({ sectionId }) => {
  const [activeLink, setActiveLink] = useState("hero");
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const marginTop = 0;
      const scrollTo =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  const activeSection = () => {
    for (let i = sectionId.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionId[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionId[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", activeSection);

    return () => {
      window.removeEventListener("scroll", activeSection);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[999] min-w-full h-[79px] flex items-center px-4 ">
      <div className="flex flex-row w-full h-[47px] justify-between items-center px-36">
        <button type="button" onClick={() => scrollToSection("hero")}>
          <Logo />
        </button>
        <div className="hidden md:block w-36 h-6 ">
          <ul className="list-none flex flex-row items-center gap-6 font-robotoFlex font-normal text-[16px] leading-6 text-center">
            {sectionId.map((section, index) => (
              <li key={index} onClick={() => scrollToSection(section)}>
                <Link to="/" className=" text-md hover:text-primary">
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-[300px] h-12 justify-end items-center ">
          <button
            className="bg-primary rounded-lg py-3 px-6 text-white"
            type="button"
          >
            Zadzwoń do nas
          </button>
        </div>
      </div>
    </div>
  );
};
