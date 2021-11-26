import AnchorLinkItem from "./AnchorLinkItem";
import clsx from "clsx";
import s from "./Navigation.module.css";
import Image from "next/image";

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
    label: "商品情報",
    labelEn: "information",
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
    label: "販売店",
    labelEn: "store",
    to: "store",
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

import instaIcon from "../../../public/icon/insta.png";

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
        <li className="mt-4 sm:mt-8 font-serif">
          <a
            href="https://www.instagram.com/7meguri_project/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <Image
                src={instaIcon}
                layout="fixed"
                width={18}
                height={18}
                alt="insta"
              />
            </span>
            <span className="ml-2 transform">Instagram</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
