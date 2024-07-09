import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Inputs } from "./layouts/Inputs";
import { Dropdowns } from "./layouts/Dropdowns";
import { InputsWithLabels } from "./layouts/InputsWithLabels";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Dropdowns />
    <Inputs />
    <InputsWithLabels />
  </React.StrictMode>
);
