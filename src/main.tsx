import React from "react";
import ReactDOM from "react-dom/client";
import { Headings } from "./Headings.tsx";
//import Buttons from "./Buttons.tsx";
import "./index.css"; //

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Headings />
  </React.StrictMode>
);
