const Layout = ({ children }) => {
  return (
    <div>
      <nav>nav</nav>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
