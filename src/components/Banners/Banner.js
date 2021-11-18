const Banner = ({ id, children }) => {
  return (
    <div id={id}>
      <p>banner</p>
      {children}
    </div>
  );
};

export default Banner;
