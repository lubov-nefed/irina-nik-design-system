import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <>
      App
      <Button text={"Button"} size="medium" style="primary" />
      <Button text={"Click"} size="big" style="secondary" />
      <Button text={"Add to Cart"} size="small" style="tertiary" />
    </>
  );
}

export default App;
