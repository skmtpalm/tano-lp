const Dealer = ({ dealer }) => {
  const { name, address, tel, url } = dealer;

  return (
    <div>
      <h4>{name}</h4>
      <ul>
        <li>{address}</li>
        <li>{tel}</li>
        <li>{url}</li>
      </ul>
    </div>
  );
};

export default Dealer;
