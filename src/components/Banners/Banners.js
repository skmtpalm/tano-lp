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
        <Banner id={"reserve"} title={`購入はこちら`} titleEn={`EC Site`}>
          <p>
            <a
              href="https://sonodanouen.official.ec/items/55529795"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://sonodanouen.official.ec/items/55529795
            </a>
          </p>
        </Banner>
        <Banner
          id={"contact"}
          title={`商品・プロジェクトに関するお問い合わせはこちら`}
          titleEn={`Contact`}
        >
          <div className="">
            <p>
              <span className="mr-2">TEL</span>090-4445-9154（提坂）
            </p>
            <p>
              <span className="mr-2">MAIL</span>
              <a href="mailto:100yearsforest@gmail.com">
                100yearsforest@gmail.com
              </a>
            </p>
          </div>
        </Banner>
      </div>
    </div>
  );
};

export default Banners;
