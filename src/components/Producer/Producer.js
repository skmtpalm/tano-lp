const Producer = ({ name, texts = [] }) => {
  return (
    <section className="min-h-screen">
      <h3>{name}</h3>
      <p>
        {texts.map((text) => (
          <span key={text}>{text}</span>
        ))}
      </p>
    </section>
  );
};

export default Producer;
