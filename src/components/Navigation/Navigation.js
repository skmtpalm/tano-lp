import AnchorLinkItem from "./AnchorLinkItem";

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

const Navigation = () => {
  return (
    <nav>
      <ul>
        {LINKS.map((link) => (
          <AnchorLinkItem key={link.to} label={link.label} to={link.to} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
