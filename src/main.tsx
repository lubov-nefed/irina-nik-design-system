import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Homepage } from "./layouts/Homepage/Homepage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
