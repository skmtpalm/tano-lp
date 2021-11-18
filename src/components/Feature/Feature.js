const Feature = ({ title, texts = [] }) => {
  return (
    <section className="min-h-screen bg-gray-100">
      <h3>{title}</h3>
      <p>
        {texts.map((text) => (
          <span key={text}>{text}</span>
        ))}
      </p>
    </section>
  );
};

export default Feature;
