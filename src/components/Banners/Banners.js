import Banner from "./Banner";
const Banners = () => {
  return (
    <div className="min-h-screen">
      <Banner id={"reserve"}>
        <p>予約</p>
      </Banner>
      <Banner id={"contact"}>
        <p>お問い合せ</p>
      </Banner>
    </div>
  );
};

export default Banners;
