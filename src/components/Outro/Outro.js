import s from "./Outro.module.css";
import clsx from "clsx";

import heroPicB from "../../../public/images/hero_02.jpg";
import Image from "next/image";

const Outro = ({ anchorId, title, mainImg, children, bgSecondaly }) => {
  return (
    <section id={anchorId} className={clsx(s.wrap)}>
      <div className={clsx(s.root)}>
        <div className={clsx(s.imgBg)}>
          <Image src={mainImg} alt={title} />
        </div>
        <div
          className={clsx(s.textBg, {
            "bg-secondaly": bgSecondaly,
            "bg-primary": !bgSecondaly,
          })}
        >
          <h3 className={clsx(s.title)}>{title}</h3>
          <div className={clsx(s.text)}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Outro;
