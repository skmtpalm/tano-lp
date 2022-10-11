import heroPic0 from "../../../public/images/2022/hiro_00.jpg";
import heroPicB from "../../../public/images/2022/hiro_02.jpg";
import heroPicC from "../../../public/images/2022/intro_02.jpg";
import heroPicD from "../../../public/images/2022/hiro_04.jpg";

import tanoCopyLogo from "../../../public/images/2022/tano_name.png";
import tanoCopyText from "../../../public/images/2022/tano_text.png"

import s from "./Hero.module.css";
import clsx from "clsx";
import Image from "next/image"

import { useInView } from "react-intersection-observer";

import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [ref, inView] = useInView({
    delay: 300,
  });

  const heroImages = [heroPic0, heroPicB, heroPicC];

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
      <div className={s.CopyLogoWrapper}>
        <Image src={tanoCopyLogo} layout="fill" objectFit="contain" alt="菩提酛田の2022" />
      </div>
      <div className={s.CopyTextWrapper}>
        <Image src={tanoCopyText} layout="fill" objectFit="contain" alt="コシヒカリが、お酒になりました" />
      </div>
    </div>
  );
};

export default Hero;
