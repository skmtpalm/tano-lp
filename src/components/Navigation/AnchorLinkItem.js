import AnchorLink from "react-anchor-link-smooth-scroll";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import s from "./Navigation.module.css";

const AnchorLinkItem = ({ label, labelEn, to, setNavOpen, delay }) => {
  const [ref, inView] = useInView({
    delay: Number(delay),
  });

  return (
    <li
      ref={ref}
      className={clsx(s.item, {
        [s.show]: inView,
      })}
      style={{ transitionDelay: `0.${delay}s` }}
    >
      <AnchorLink onClick={() => setNavOpen(false)} href={`#${to}`}>
        <span className={clsx(s.labelEn)}>{labelEn}</span>
        <span className={clsx(s.label)}>{label}</span>
      </AnchorLink>
    </li>
  );
};

export default AnchorLinkItem;
