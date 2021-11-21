import s from "./SectionTitle.module.css";
import clsx from "clsx";

const SectionTitle = ({ title, titleEn }) => {
  return (
    <div className={clsx(s.root)}>
      <p className={clsx(s.titleEn)}>{titleEn}</p>
      <h2 className={clsx(s.title)}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
