import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Stepper } from "./components/Stepper/Stepper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Stepper size={"medium"} />
    <Stepper size={"big"} />
    <Stepper size={"small"} />
  </React.StrictMode>
);
