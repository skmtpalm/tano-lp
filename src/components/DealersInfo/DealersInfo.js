import Dealer from "../Dealer";

const DealersInfo = ({ dealers }) => {
  return (
    <section className="mb-12">
      <div className="container ml-auto bg-gray-100 flex flex-col py-8 sm:py-12">
        {dealers.map((dealer) => (
          <Dealer key={dealer.name} dealer={dealer} />
        ))}
      </div>
    </section>
  );
};

export default DealersInfo;
