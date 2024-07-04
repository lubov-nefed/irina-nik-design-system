import React from "react";
import ReactDOM from "react-dom/client";
/* === Cut the below Later === */
import { Input } from "./components/Input/Input.tsx";
import iconSearch from "./assets/icons/input-icons/icon-search.svg";
import iconX from "./assets/icons/input-icons/icon-x.svg";
/* === Cut the above Later === */

//import { InputsWithLabels } from "./InputsWithLabels.tsx";
import { Inputs } from "./Inputs.tsx";
//import { Headings } from "./Headings.tsx";
//import Buttons from "./Buttons.tsx";
import "./index.css"; //

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 
    <InputsWithLabels /> */}
    <Inputs />
  </React.StrictMode>
);
