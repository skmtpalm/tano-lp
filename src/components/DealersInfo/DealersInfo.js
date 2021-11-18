import Dealer from "../Dealer";

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

const DealersInfo = () => {
  return (
    <section id="dealers" className="min-h-screen">
      {DEALERS.map((dealer) => (
        <Dealer key={dealer.name} dealer={dealer} />
      ))}
    </section>
  );
};

export default DealersInfo;
