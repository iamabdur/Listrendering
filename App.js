import "./styles.css";

const Shopping = ({ items }) => {
  return (
    <section>
      <ol>
        {items.map((item) => (
          <li key={Math.random() * 5}>{item}</li>
        ))}
      </ol>
    </section>
  );
};

const App = () => {
  return (
    <section>
      <Shopping
        items={["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]}
      />
    </section>
  );
};

export default App;
