import heroBgPic from "../../../public/images/hero_bg.jpg";
import logoPic from "../../../public/images/tano_logo.png";
import heroPicA from "../../../public/images/hero_01.jpg";
import heroPicB from "../../../public/images/hero_02.jpg";
import heroPicC from "../../../public/images/hero_03.jpg";
import s from "./Hero.module.css";
import clsx from "clsx";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const heroImages = [heroPicA, heroPicB, heroPicC];

  const [activeIndex, setActiveIndex] = useState(1);
  const autoPlayRef = useRef(null);

  const handleCycleIndex = () => {
    const imagesSize = heroImages.length;

    if (activeIndex === imagesSize - 1) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(activeIndex + 1);
  };

  useEffect(() => {
    autoPlayRef.current = handleCycleIndex;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="top" className={clsx(s.root)}>
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={clsx(s.slide, {
            [s.active]: index === activeIndex,
          })}
          style={{ backgroundImage: `url(${image.src})` }}
        ></div>
      ))}
    </div>
  );
};

export default Hero;
