import Image from "next/image";
import Head from "next/head";
import Feature from "../components/Feature";
import ProductDetail from "../components/ProductDetail";
import Outro from "../components/Outro";
import DealersInfo from "../components/DealersInfo";
import Banners from "../components/Banners";
import SectionTitle from "../components/SectionTitle";
import sonodaPic from "../../public/images/sonodafarm.jpg";
import sugiiPic from "../../public/images/sugii.jpg";

import inekariPic from "../../public/images/inekari_main.jpg";

import inekariPicB from "../../public/images/inekari_sub.jpg";

import teamPic from "../../public/images/team.jpg";

import instaIcon from "../../public/icon/insta.png";

import koshihikariPic from "../../public/images/2022/koshihikari.jpg";
import bodaimotoPic from "../../public/images/2022/bodaimoto.jpg";
import tauePic from "../../public/images/2022/taue.jpg";

const DEALERS = [
  {
    name: "Un jour MARCHE",
    address: "静岡市葵区茶町1-27-2",
    tel: "054-255-6007",
    url: "https://kocuu.com/",
  },
  {
    name: "SAKE・キリンヤ",
    address: "藤枝市大洲1-9-13",
    tel: "054-635-8210",
    url: "https://sake-kirinya.jp/",
  },
  {
    name: "リカーズ グリーン",
    address: "焼津市中新田251-3",
    tel: "054-624-3210",
    url: "https://green.ocnk.net/",
  },
];

const STORE = [
  {
    name: "そのだ農園",
    address: "島田市東光寺155",
    tel: "0547-36-4765",
    url: "https://sonodanouen.com",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>菩提もと田の</title>
      </Head>
      <div id="feature" className="bg-gray-100">
        <SectionTitle title={`田ののこだわり`} titleEn={`Commitment`} />
        <Feature
          mainImg={bodaimotoPic}
          title="菩提酛づくり"
          texts={[
            "造りの誕生は、室町時代。",
            "自然の流れに沿ってゆっくり醸すからこそ、",
            "唯一無二の深い味わいが",
            "余韻となって感じられます。",
          ]}
        />
        <Feature
          reverse
          mainImg={koshihikariPic}
          title="コシヒカリ"
          texts={[
            "噛むほどに甘みのある飯米のコシヒカリ。",
            "毎日食べているお米と、米麹と水、",
            "たった３つの原材料で「田の」は出来ました。",
            "農薬・化学肥料不使用のお米です。",
          ]}
        />
        <Feature
          mainImg={tauePic}
          title="手植え"
          texts={[
            "老若男女がどろんこになりながら",
            "丁寧に稲を手植えし、お米を育てました。",
            "お家の食卓で、みんなが集まる場所で、",
            "白飯とともに美味しいひと時を。 ",
          ]}
        />
      </div>
      <ProductDetail />
      <Banners />
      <div id="producers">
        <SectionTitle title={`生産者紹介`} titleEn={`Producers`} />
        <Feature
          reverse
          textSmall
          mainImg={sonodaPic}
          title="そのだ農園"
          texts={[
            "静岡県島田市東光寺にて、４０年以上有機栽培を続ける農家。",
            "５月からはじまる田植えでは、田んぼにいる生き物と上手く付き合いながら",
            "農薬・化学肥料を一切使わず稲を丁寧に育てる。",
            "しっかりとした土壌で育つお米は、食感がよく、奥深いうま味が感じられる。",
          ]}
        />
        <Feature
          textSmall
          mainImg={sugiiPic}
          title="杉井酒造"
          texts={[
            "日本酒『田の』の製造を杉井酒造に委託。",
            "天保１３（１８４２）年から続く老舗の酒蔵で、日本酒、焼酎、味醂と商品は多岐にわたる。",
            "その背景には、６代目当主・杉井均乃介氏の好奇心の旺盛さや研究熱心さが功を奏している。",
            "ほかにはない、昔ながらの丁寧な造りに感銘を受けたファンが全国に多数。",
          ]}
        />
      </div>
      <Outro title="地域とともに、育てていく" anchorId="outro" mainImg={inekariPic}>
        <span>菩提酛『田の』の原材料であるコシヒカリは、そのだ農園の指導の元、『森あそびのまなび場』(http:// morivivi.jp/)の『どろんこ祭り 〜田植え編〜』にて、親子でひとつひとつ手植えして育てたお米です。「田んぼ」「楽しい」という想いを􏰁せて、『田の』と名付けました。<br />
          お米の一粒一粒はごはんとして食べられるだけではなく、発酵の力を借りることで麹となり、さらにお酒へと変化します。多彩なパワーのある米の魅力を、自然の力を借りてじっくり醸した『田の』から感じてもらえればうれしいです。大人は日本酒を、子どもは新米を。家族みんなで楽しい食卓が生まれることを願っています。
        </span>
        <div className="mt-2">
          <Image src={inekariPicB} alt="ineklari" />
        </div>
      </Outro>
      <Outro
        title="ななめぐりプロジェクト"
        anchorId="nanameguriproject"
        mainImg={teamPic}
        bgSecondaly
      >
        <span>
          「地域に循環を生み出したい」「次世代に体によい食と伝統を残したい」。“次世代につなげたい大切なことが絶えることなく、何度も世代に渡ってめぐる”という想いを込めて、『ななめぐりプロジェクト』を立ち上げました。第二弾として出来上がった、日本酒『田の』をぜひ味わってください。
        </span>
        <p className="mt-8">代表メンバー</p>
        <ul>
          <li>
            提坂弥生(提坂研究所{" "}
            <a
              href="http://sageken.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              http://sageken.com/
            </a>
            )
          </li>
          <li>
            町紗耶香(森あそびのまなび場{" "}
            <a
              href="http://morivivi.jp/"
              rel="noopenner noreferrer"
              target="_blank"
            >
              http://morivivi.jp/
            </a>
            )
          </li>
          <li className="mt-2">
            <a
              href="https://www.instagram.com/7meguri_project/"
              rel="noreferrer noopenner"
              target="_blank"
            >
              <div className="inline-block transform translate-y-1">
                <Image
                  layout="fixed"
                  width={16}
                  height={16}
                  src={instaIcon}
                  alt="instagram"
                />
              </div>
              <span className="ml-2">Instagram</span>
            </a>
          </li>
        </ul>
      </Outro>
      <div id="store">
        <SectionTitle title={`販売店`} titleEn={`Store`} />
        <DealersInfo dealers={STORE} />
      </div>
      <div id="dealers">
        <SectionTitle title={`特約店`} titleEn={`Dealers`} />
        <DealersInfo dealers={DEALERS} />
      </div>
      <Banners />
    </>
  );
}
