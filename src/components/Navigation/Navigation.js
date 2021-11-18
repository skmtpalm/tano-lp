import { useState } from "react";
import AnchorLinkItem from "./AnchorLinkItem";
import clsx from "clsx";
import s from "./Navigation.module.css";

const LINKS = [
  {
    label: "TOP",
    to: "top",
  },
  {
    label: "こだわり",
    to: "feature",
  },
  {
    label: "購入方法",
    to: "howtobuy",
  },
  {
    label: "生産者紹介",
    to: "producers",
  },
  {
    label: "地域とともに歩む",
    to: "outro",
  },
  {
    label: "ななめぐりプロジェクト",
    to: "nanameguriproject",
  },
  {
    label: "特約店",
    to: "dealers",
  },
  {
    label: "お問い合わせ",
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
      <ul>
        {LINKS.map((link) => (
          <AnchorLinkItem
            setNavOpen={setNavOpen}
            key={link.to}
            label={link.label}
            to={link.to}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
