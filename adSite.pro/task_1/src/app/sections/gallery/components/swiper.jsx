import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryBlock, GalleryCard } from "./gallery_block";

const cars = [
  {
    img: "/cars/passenger/bmw.jpg",
  },
  {
    img: "/cars/passenger/bmw.jpg",
  },
  {
    img: "/cars/passenger/bmw.jpg",
  },
  {
    img: "/cars/passenger/bmw.jpg",
  },
  {
    img: "/cars/passenger/bmw.jpg",
  },
  {
    img: "/cars/passenger/bmw.jpg",
  },
  {
    img: "/cars/passenger/bmw.jpg",
  },
  {
    img: "/cars/passenger/bmw.jpg",
  },
];
export const Swiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const getOffset = () => {
    return `-${activeIndex * 1330}px`;
  };

  return (
    <div className="w-full flex flex-col items-center gap-12">
      <motion.div
        className="flex flex-1 w-full h-full gap-16"
        animate={{ x: getOffset() }}
        transition={{ type: "tween", stiffness: 300, damping: 30 }}
      >
        {cars.map((item, index) => (
          <GalleryBlock key={index} className={`flex flex-row gap-16`}>
            <GalleryCard>
              <img src={item.img} className="w-full h-full" />
            </GalleryCard>
            {cars[index + 1] && (
              <GalleryCard>
                <img src={item.img} className="w-full h-full" />
              </GalleryCard>
            )}
          </GalleryBlock>
        ))}
      </motion.div>

      <div className="w-20 h-6 space-x-2">
        {[0, 1, 2, 3, 4].map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? "bg-primary" : "bg-[#F1F1F1]"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
