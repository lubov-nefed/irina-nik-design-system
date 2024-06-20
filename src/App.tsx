import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      App
      <Button
        text={"Load"}
        size="medium"
        style="primary"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />
      <Button text={"Click"} size="big" style="secondary" loading={isLoading} />
      <Button
        text={"Add to Cart"}
        size="small"
        style="tertiary"
        loading={isLoading}
      />
    </>
  );
}

export default App;
