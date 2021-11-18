import { useState } from "react";
import Navigation from "../Navigation";
import NavButton from "../NavButton/";
import Hero from "../Hero";
import Intro from "../Intro";
import Logo from "../Logo";
import { useInView } from "react-intersection-observer";

const Layout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [ref, inView, entry] = useInView();

  return (
    <div>
      <div className="fixed top-8 right-8 z-20">
        <NavButton setNavOpen={setNavOpen} isOpen={isNavOpen} />
      </div>
      <Navigation setNavOpen={setNavOpen} isOpen={isNavOpen} />
      <h1 className="fixed w-24 sm:w-40 top-4 left-4 z-50">
        <Logo isChange={inView} />
      </h1>
      <header>
        <Hero />
        <Intro />
      </header>
      <main ref={ref}>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
