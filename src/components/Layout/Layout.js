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
      <h1 className="fixed w-20 sm:w-40 top-4 left-4 z-50">
        <Logo isChange={inView} />
      </h1>
      <header>
        <Hero />
        <Intro />
      </header>
      <main className="bg-gray-50" ref={ref}>
        {children}
      </main>
      <footer className="bg-black text-white py-8 sm:py-23 px-4 sm:px-8 font-serif">
        <p className="mb-4 border-b pb-4 tracking-wide text-sm sm:text-lg sm:text-right">
          お酒は二十歳になってから。
          <br />
          <br />
          飲酒運転は法律で禁止されています。
          <br />
          妊娠中および授乳中の飲酒はお控えください。
          <br />
          お酒は適量を。
        </p>
        <p>&copy;tano 2022</p>
      </footer>
    </div>
  );
};

export default Layout;
