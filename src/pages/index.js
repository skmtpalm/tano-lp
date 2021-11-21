import Head from "next/head";
import Feature from "../components/Feature";
import ProductDetail from "../components/ProductDetail";
import Outro from "../components/Outro";
import NanameguriProject from "../components/NanameguriProject";
import DealersInfo from "../components/DealersInfo";
import Banners from "../components/Banners";
import SectionTitle from "../components/SectionTitle";

import heroPicB from "../../public/images/hero_02.jpg";

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
            "40年以上有機農家を続ける",
            "そのだ農園のコシヒカリ…",
            "ひとつひとつ手植えで育てた",
            "特別なお米です",
          ]}
        />
        <Feature
          reverse
          mainImg={heroPicB}
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
          mainImg={heroPicB}
          title="そのだ農園"
          texts={[
            "静岡県島田市東光寺にて、40年以上有機栽培を続ける農家。",
            "5月からはじまる田植えでは、田んぼにいる生き物と上手く付き合いながら",
            "農薬・化学肥料を一切使わず稲を丁寧に育てる。",
            "しっかりとした土壌で育つお米は、食感がよく、奥深いうま味が感じられる。",
          ]}
        />
        <Feature
          textSmall
          mainImg={heroPicB}
          title="杉井酒造"
          texts={[
            "日本酒『田の』の製造を杉井酒造に委託。",
            "天保13（1842）年から続く老舗の酒蔵で、日本酒、焼酎、味醂と商品は多岐にわたる。",
            "その背景には、６代目当主・杉井均乃介氏の好奇心の旺盛さや研究熱心さが功を奏している。",
            "ほかにはない、昔ながらの丁寧な造りに感銘を受けたファンが全国に多数。",
          ]}
        />
      </div>
      <Outro />
      <NanameguriProject />
      <DealersInfo />
      <Banners />
    </>
  );
}
