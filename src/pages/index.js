import Image from "next/image";
import Head from "next/head";
import Feature from "../components/Feature";
import ProductDetail from "../components/ProductDetail";
import Outro from "../components/Outro";
import DealersInfo from "../components/DealersInfo";
import Banners from "../components/Banners";
import SectionTitle from "../components/SectionTitle";

import heroPicB from "../../public/images/hero_02.jpg";
import bodaimotoPic from "../../public/images/bodaimoto.jpg";
import sonodaPic from "../../public/images/sonodafarm.jpg";
import sugiiPic from "../../public/images/sugii.jpg";

import inekariPic from "../../public/images/inekari_main.jpg";

import inekariPicB from "../../public/images/inekari_sub.jpg";

import teamPic from "../../public/images/team.jpg";

import instaIcon from "../../public/icon/insta.png";

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
    url: "",
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
          mainImg={heroPicB}
          title="無農薬米"
          texts={[
            "４０年以上有機農家を続ける",
            "そのだ農園のコシヒカリ…",
            "ひとつひとつ手植えで育てた",
            "特別なお米です",
          ]}
        />
        <Feature
          reverse
          mainImg={bodaimotoPic}
          title="菩提酛"
          texts={[
            "室町時代に生まれた『菩提酛』",
            "日本酒造りの原型とも言われる",
            "一度は途絶えた希少な造りで",
            "じっくり丁寧に仕込みました",
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
      <Outro title="地域とともに歩く" anchorId="outro" mainImg={inekariPic}>
        <span>
          日本酒『田の』のコシヒカリは、そのだ農園の指導の元『森あそびのまなび場』（http://morivivi.jp/）の田植え企画『どろんこまつり』にて、親子でひとつひとつ手植えして育てたものです。「田んぼ」「楽しい」という想いを込めて、「田の」と名付けました。お米の一粒一粒は、ごはんとして食べられるだけでなく、麹になり、お酒へも変化します。多様に変化する米の魅力を、複雑味のある味わい深い日本酒『田の』から感じてもらえたらうれしいです。大人はお酒を、子どもは新米を。家族みんなで楽しい食卓が生まれることを願っています。
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
