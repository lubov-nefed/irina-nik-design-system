import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { InputsWithLabels } from "./layouts/InputsWithLabels";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InputsWithLabels />
  </React.StrictMode>
);
