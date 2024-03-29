import clsx from "clsx";
import s from "./Intro.module.css";
import bgTexture from "../../../public/images/main_bg_texture.png";
import introPic01 from "../../../public/images/2022/intro_01.jpg";
import introPic02 from "../../../public/images/2022/hiro_01.jpg";
import Image from "next/image";

const Intro = () => {
  const texts = [
    "米作り、酒造り……。",
    "毎日小さな小さな手間ひまをかけて、",
    "「おいしくなれ」と願いをかける。",
    " ",
    "たわわに実った稲に、複雑に醸された酒に、",
    "いっときの苦労などは、どうでもいい。",
    " ",
    "「楽しいね」の、根っこにある地道な積み重ね。",
    " 幾重にも重ねられた美味しい想いを、",
    "「良い酔い」と感じてください。",
  ];

  const texts2 = [
    "静岡県島田市の『そのだ農園』による米・コシヒカリ（精米歩合90%）を使用。農薬・化学肥料を一切使わず丁寧に手植えしたお米です。",
    "米と微生物たちの力を借り、自然の流れに沿って旨味をじっくり引き出した 原点回帰の地酒が完成しました、故郷の味・島田の味を、ご賞味ください。",
  ];

  return (
    <section className="min-h-screen">
      <div
        className={clsx(s.textureBg)}
        style={{
          backgroundImage: `url(${bgTexture.src})`,
        }}
      >
        <div className="flex flex-col sm:flex-row">
          <p className="w-full sm:w-1/2">
            {texts.map((text, index) => (
              <span className={clsx(s.text)} key={index}>
                {text}
              </span>
            ))}
          </p>
          <div className="w-full sm:w-1/2 sm:block hidden">
            <Image src={introPic01} alt="about tano" />
          </div>
        </div>
      </div>
      <div className="container sm:ml-auto pr-0 my-12 sm:my-24">
        <div className="flex sm:flex-row-reverse flex-col">
          <div className="sm:w-3/5 w-full">
            <Image src={introPic02} alt="about tano" />
          </div>
          <div className="sm:w-2/5 w-full sm:py-8">
            <h2 className={clsx(s.title)}>自然酒 田の</h2>
            <p className={clsx(s.subTitle)}>TANO</p>
            <p className="mr-8 sm:mr-12 leading-10">
              {texts2.map((text, index) => (
                <span key={index} className={clsx(s.text2)}>
                  {text}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
