import React, { useState, useEffect } from "react";
import { Logo } from "./logo";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../buttons/primary_button";
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
    <div className="w-full m-auto flex items-center justify-center py-4 bg-background-primary">
      <div className="flex flex-row w-[1200px] justify-between items-center">
        <button type="button" onClick={() => scrollToSection("hero")}>
          <Logo />
        </button>
        <div className="hidden md:block ">
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
        <div className="flex w-[300px] justify-end items-center ">
          <PrimaryButton>Zadzwoń do nas</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
