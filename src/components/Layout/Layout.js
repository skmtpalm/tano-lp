import { useState } from "react";
import Navigation from "../Navigation";
import NavButton from "../NavButton/";
import Hero from "../Hero";
import Logo from "../Logo";

const Layout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-8 right-8 z-20">
        <NavButton setNavOpen={setNavOpen} isOpen={isNavOpen} />
      </div>
      <Navigation setNavOpen={setNavOpen} isOpen={isNavOpen} />
      <h1 className="fixed w-24 sm:w-40 top-4 left-4 z-50">
        <Logo />
      </h1>
      <header>
        <Hero />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
