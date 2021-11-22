import productPic from "../../../public/images/tano_product.jpg";
import Image from "next/image";
import clsx from "clsx";
import s from "./ProductDetail.module.css";

import { useInView } from "react-intersection-observer";

const ProductDetail = () => {
  const productInfo = [
    {
      label: `原材料`,
      content: `米、米麹`,
    },
    {
      label: `使用米`,
      content: `島田市産コシヒカリ100%使用（農薬・化学肥料不使用）`,
    },
    {
      label: `精米歩合`,
      content: `90%`,
    },
    {
      label: `アルコール度数`,
      content: `14-16%（予定）`,
    },
    {
      label: `製造元`,
      content: `杉井酒造`,
    },
    {
      label: `内容量`,
      content: `720㎖`,
    },
    {
      label: `価格`,
      content: `2,090円（税込）`,
    },
    {
      label: `販売店`,
      content: `そのだ農園（島田市東光寺155）`,
    },
    {
      label: `販売日`,
      content: `2021年 12月18日（土）（予定）`,
    },
  ];

  const [ref, inView] = useInView({
    delay: 300,
  });

  return (
    <section id="howtobuy">
      <div className="container ml-auto h-full bg-transparent text-white px-0">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2">
            <Image src={productPic} alt="tano" />
          </div>
          <div
            ref={ref}
            className="bg-black p-8 sm:p-12 flex flex-col justify-between"
          >
            <div className="flex justify-between">
              <h3 className={clsx(s.title)}>商品情報</h3>
              <p className={clsx(s.limit)}>数量限定 650本</p>
            </div>
            <dl
              className={clsx(s.info, {
                [s.infoInView]: inView,
              })}
            >
              {productInfo.map((info, index) => (
                <div key={index} className={clsx(s.row)}>
                  <dt>{info.label}</dt>
                  <dd>{info.content}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
