import React, { useRef } from "react";
import Cards from "./Cards";

const Foregrond = () => {
  const ref = useRef(null);
  console.log(ref);
  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur. Totam, dolores! bello",
      fileSize: "1.0mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur. Totam, dolores! bello",
      fileSize: "1.0mb",
      close: true,
      tagDetails: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur. Totam, dolores! bello",
      fileSize: "1.0mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur. Totam, dolores! bello",
      fileSize: "1.0mb",
      close: true,
      tagDetails: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap  "
    >
      {data.map((item, index) => (
        <Cards data={item} referenace={ref} />
      ))}
    </div>
  );
};

export default Foregrond;
