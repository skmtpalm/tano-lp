import s from "./NavButton.module.css";
import clsx from "clsx";

const NavButton = ({ isOpen, setNavOpen }) => {
  return (
    <div
      className={clsx(s.wrap, {
        [s.open]: isOpen,
      })}
      onClick={() => setNavOpen(!isOpen)}
    >
      <span className={s.line}></span>
      <span className={clsx(s.line, s.line2)}></span>
    </div>
  );
};

export default NavButton;
