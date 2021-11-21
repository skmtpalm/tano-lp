import clsx from "clsx";
import s from "./Banner.module.css";

const Banner = ({ id, title, titleEn, children }) => {
  return (
    <div id={id} className={clsx(s.root)}>
      <div className={clsx(s.header)}>
        <h3 className={clsx(s.titleEn)}>{titleEn}</h3>
        <h4 className={clsx(s.title)}>{title}</h4>
      </div>
      <div className={clsx(s.content)}>{children}</div>
    </div>
  );
};

export default Banner;
