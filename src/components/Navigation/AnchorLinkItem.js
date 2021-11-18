import AnchorLink from "react-anchor-link-smooth-scroll";

const AnchorLinkItem = ({ label, to, setNavOpen }) => {
  return (
    <li>
      <AnchorLink onClick={() => setNavOpen(false)} href={`#${to}`}>
        {label}
      </AnchorLink>
    </li>
  );
};

export default AnchorLinkItem;
