import AnchorLink from "react-anchor-link-smooth-scroll";

const AnchorLinkItem = ({ label, to }) => {
  return (
    <li>
      <AnchorLink href={`#${to}`}>{label}</AnchorLink>
    </li>
  );
};

export default AnchorLinkItem;
