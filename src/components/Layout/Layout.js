import Navigation from "../Navigation";
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
