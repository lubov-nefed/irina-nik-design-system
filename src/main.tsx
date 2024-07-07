import React from "react";
import ReactDOM from "react-dom/client";

import { InputsWithLabels } from "./layouts/InputsWithLabels";
import "./index.css"; //

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InputsWithLabels />
  </React.StrictMode>
);
