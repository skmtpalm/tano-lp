import { useState } from "react";
import Navigation from "../Navigation";
import NavButton from "../NavButton/";

const Layout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-8 right-8 z-20">
        <NavButton setNavOpen={setNavOpen} isOpen={isNavOpen} />
      </div>
      <Navigation setNavOpen={setNavOpen} isOpen={isNavOpen} />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
