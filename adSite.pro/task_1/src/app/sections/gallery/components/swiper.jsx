import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GalleryBlock, GalleryCard } from "./gallery_block";
import { CarLoading } from "./carLoading";

export const Swiper = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cars, setCars] = useState([]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const getOffset = () => {
    return `-${activeIndex * 1330}px`;
  };

  useEffect(() => {
    setCars(data);
  }, [data]);

  return (
    <div className="w-full flex flex-col items-center gap-12">
      <motion.div
        className="flex flex-1 w-full h-full gap-16"
        animate={{ x: getOffset() }}
        transition={{ type: "tween", stiffness: 300, damping: 30 }}
      >
        {cars
          ? cars
              .reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / 2);
                if (!resultArray[chunkIndex]) {
                  resultArray[chunkIndex] = []; // Tworzy nową grupę dla każdej pary
                }
                resultArray[chunkIndex].push(item);
                return resultArray;
              }, [])
              .map((chunk, chunkIndex) => (
                <GalleryBlock
                  key={chunkIndex}
                  className={`flex flex-row gap-16`}
                >
                  {chunk.map((item, itemIndex) => (
                    <GalleryCard key={itemIndex}>
                      <img
                        src={item.img}
                        className="w-full h-full"
                        alt={`${item.name}-${item.model}`}
                      />
                    </GalleryCard>
                  ))}
                </GalleryBlock>
              ))
          : [0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <GalleryBlock
                key={index}
                className={`flex flex-row gap-16 bg-third`}
              >
                <GalleryCard>
                  <CarLoading key={index} />
                </GalleryCard>
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
