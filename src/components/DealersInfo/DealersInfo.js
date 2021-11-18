import Dealer from "../Dealer";

const DEALERS = [
  {
    name: "Un jour MARCHE",
    address: "静岡市葵区茶町1-27-2",
    tel: "054-255-6007",
    url: "https://kocuu.com/",
  },
  {
    name: "Un jour MARCHE",
    address: "静岡市葵区茶町1-27-2",
    tel: "054-255-6007",
    url: "https://kocuu.com/",
  },
  {
    name: "Un jour MARCHE",
    address: "静岡市葵区茶町1-27-2",
    tel: "054-255-6007",
    url: "https://kocuu.com/",
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
