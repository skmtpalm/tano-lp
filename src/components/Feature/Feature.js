import Image from "next/image";
import s from "./Feature.module.css";
import clsx from "clsx";

import { useInView } from "react-intersection-observer";

const Feature = ({ mainImg, title, texts = [], reverse }) => {
  const [ref, inView] = useInView({
    delay: 300,
  });

  console.log("feature", inView);

  return (
    <section ref={ref} className="pt-24 pb-16 sm:py-32 overflow-hidden">
      <div className="container sm:ml-auto px-0">
        <div
          className={clsx(s.wrap, {
            [s.reverse]: reverse,
          })}
        >
          <div className="w-full sm:w-2/3 relative">
            <h2
              className={clsx(s.bgTitle, {
                [s.bgReverse]: reverse,
                [s.bgTextShow]: inView,
              })}
            >
              {title}
            </h2>
            <div
              className={clsx(s.mainVisual, {
                [s.mainVisualInView]: inView,
              })}
            >
              <Image src={mainImg} alt={title} />
            </div>
          </div>
          <div className="py-8 sm:py-0 w-full sm:w-1/3 flex items-center justify-center">
            <div>
              <p
                className={clsx(s.text, {
                  [s.textInView]: inView,
                })}
              >
                {texts.map((text) => (
                  <>
                    <span key={text}>{text}</span>
                    <br />
                  </>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
