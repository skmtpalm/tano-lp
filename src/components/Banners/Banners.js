import Banner from "./Banner";
import bgTexture from "../../../public/images/main_bg_texture.png";

const Banners = () => {
  return (
    <div
      className="bg-ceter bg-cover bg-no-repeat py-16 bg-secondaly bg-opacity-90"
      style={{
        backgroundImage: `url(${bgTexture.src})`,
      }}
    >
      <div className="container ml-auto flex flex-col sm:flex-row">
        <Banner id={"reserve"} title={`予約はこちら`} titleEn={`Reserve`}>
          <p>
            <a href="">https://ws.formzu.net/fgen/S75904802/</a>
          </p>
        </Banner>
        <Banner
          id={"contact"}
          title={`商品・プロジェクトに関するお問い合わせはこちら`}
          titleEn={`Contact`}
        >
          <div>
            <p>
              <span>TEL</span>090-4445-9154（提坂）
            </p>
            <p>
              <span>MAIL</span>100yearsforest@gmail.com
            </p>
          </div>
        </Banner>
      </div>
    </div>
  );
};

export default Banners;
