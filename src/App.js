import "./styles.css";
import ButtonComponent from "./Component/index";

const App = () => {
  return (
    <div>
      <h1>Props Component</h1>
      <div className="button-container">
        <ButtonComponent content="yellow" className="yellow" />
        <ButtonComponent content="Blue" className="blue" />
        <ButtonComponent content="Grey" className="grey" />
      </div>
    </div>
  );
};

export default App;
