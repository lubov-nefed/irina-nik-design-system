import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      App
      <Button
        text={"M Default"}
        size="medium"
        style="primary"
        loading={false}
        disabled={false}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        text={"M Default"}
        size="medium"
        style="primary"
        loading={true}
        disabled={false}
      />
      <Button
        text={"M Default"}
        size="medium"
        style="primary"
        loading={false}
        disabled={true}
      />
      <br />
      <Button
        text={"Big Default"}
        size="big"
        style="secondary"
        loading={isLoading}
        disabled={true}
      />
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
