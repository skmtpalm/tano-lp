import AnchorLinkItem from "./AnchorLinkItem";
import clsx from "clsx";
import s from "./Navigation.module.css";

const LINKS = [
  {
    label: "トップ",
    labelEn: "top",
    to: "top",
  },
  {
    label: "こだわり",
    labelEn: "feature",
    to: "feature",
  },
  {
    label: "購入方法",
    labelEn: "How to buy",
    to: "howtobuy",
  },
  {
    label: "生産者紹介",
    labelEn: "Producers",
    to: "producers",
  },
  {
    label: "地域とともに歩む",
    labelEn: "pray",
    to: "outro",
  },
  {
    label: "ななめぐりプロジェクト",
    labelEn: "nanameguri project",
    to: "nanameguriproject",
  },
  {
    label: "特約店",
    labelEn: "dealers",
    to: "dealers",
  },
  {
    label: "お問い合わせ",
    labelEn: "contact",
    to: "contact",
  },
];

const Navigation = ({ isOpen, setNavOpen }) => {
  return (
    <nav
      className={clsx(s.wrap, {
        [s.open]: isOpen,
      })}
    >
      <ul className="px-6">
        {LINKS.map((link, index) => (
          <AnchorLinkItem
            delay={index}
            setNavOpen={setNavOpen}
            key={link.to}
            label={link.label}
            labelEn={link.labelEn}
            to={link.to}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
