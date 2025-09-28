import Header from "./Components/Header";
import Card from "./Components/Card";
import { resources } from "./data";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header title="Top 10 Coding Resources" />
      <div className="card-grid">
        {resources.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default App;
