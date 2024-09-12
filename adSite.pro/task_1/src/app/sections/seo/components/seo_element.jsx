import React from "react";

const Header = ({ text }) => (
  <div className="w-[576px] h-[76px] ">
    <h3 className="font-bebas font-normal text-[25px] leading-9 tracking-[-0.03em] text-white mb-4">
      {text}
    </h3>
  </div>
);

const Content = ({ text }) => (
  <div className="w-full gap-6 flex flex-col ">
    <h5 className="w-full h-[42px] font-robotoCondensed font-normal text-sm leading-[21px] text-white mb-4 line-clamp-2">
      {text}
    </h5>
  </div>
);

const MoreButton = () => (
  <button
    className="text-center w-fit text-white hover:text-primary"
    type="button"
  >
    <div className="flex flex-row items-center border-b-[1.5px] pb-[6px] gap-[6px]">
      Rozwiń
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0.57em"
        height="1em"
        viewBox="0 0 9 16"
      >
        <path
          fill="currentColor"
          d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"
        />
        <path
          fill="currentColor"
          d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0s.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
        />
      </svg>
    </div>
  </button>
);

export const SeoElement = ({ header, content }) => {
  return (
    <div className="w-[576px] gap-4 flex flex-col">
      <Header text={header} />
      <Content text={content} />
      <MoreButton />
    </div>
  );
};
