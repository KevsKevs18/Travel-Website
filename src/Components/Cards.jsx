import React from "react";
import samplepic2 from "../assets/Pic2.jpg";
import beach from "../assets/Beach.jpg";
import city from "../assets/City.jpg";
import longride from "../assets/Longride.jpg";
import mountain from "../assets/Mountain.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const cardFeatures = [
    { src: beach, title: "Ride to the Shore", path: "/features/beach"},
    { src: city, title: "Metro Miles", path: "/features/cities"},
    { src: longride, title: "Endless Roads", path: "/features/beach"},
    { src: mountain, title: "Ride to the Peaks", path: "/features/beach"},
  ];

  const [isClick, setIsClick] = useState(
    Array(cardFeatures.length).fill(false)
  );

  const navigate = useNavigate();

  const toggleFeature = (index, path) => {
    setIsClick((prev) =>
      prev.map((click, i) => (i === index ? !click : click))
    );
    navigate(path);
  };

  return (
    <>
      {cardFeatures.map((card, index) => (
        <div
          className="flex overflow-hidden flex-col w-full min-h-[11rem] rounded-xl"
          key={index}
        >
          <div className="flex overflow-hidden w-full aspect-square md:aspect-[4/3] rounded-xl">
            <img
            onClick={()=> toggleFeature(index, card.path)}
              src={card.src}
              alt="Sample Pic"
              className="cursor-pointer w-full h-full rounded-t-xl shadow-darkShadow brightness-75 transform-translate-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="my-2 ml-2 text-light text-[1rem] font-sans font-bold">
            {card.title}
          </h3>
        </div>
      ))}
    </>
  );
};

export default Cards;
