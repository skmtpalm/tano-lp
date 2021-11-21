import heroPicA from "../../../public/images/hero_01.jpg";
import heroPicB from "../../../public/images/hero_02.jpg";
import heroPicC from "../../../public/images/hero_03.jpg";
import s from "./Hero.module.css";
import clsx from "clsx";

import { useInView } from "react-intersection-observer";

import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [ref, inView] = useInView({
    delay: 300,
  });

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
      <div className={clsx(s.overlay)}></div>
      <p ref={ref} className={clsx(s.copy)}>
        <span
          className={clsx(s.yoiyoi, {
            [s.yoiyoiShow]: inView,
          })}
        >
          よいよい
        </span>
        <span
          className={clsx(s.tanoshi, {
            [s.tanoshiShow]: inView,
          })}
        >
          うれし　たのし
        </span>
      </p>
    </div>
  );
};

export default Hero;
