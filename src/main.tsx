import React from "react";
import ReactDOM from "react-dom/client";

import { InputsWithLabels } from "./InputsWithLabels.tsx";
//import { Inputs } from "./Inputs.tsx";
//import { Headings } from "./Headings.tsx";
//import Buttons from "./Buttons.tsx";
import "./index.css"; //

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InputsWithLabels />
    {/* <Inputs /> */}
  </React.StrictMode>
);
