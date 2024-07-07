import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //

import { Textarea } from "./components/Textarea/Textarea";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    Textarea
    <br />
    <Textarea placeholder="Placeholder" />
    <br />
    <Textarea placeholder="Placeholder" cols={30} />
    <br />
    <Textarea placeholder="Placeholder" cols={30} rows={5} />
    <br />
    <Textarea placeholder="Placeholder" cols={30} rows={5} maxLength={20} />
  </React.StrictMode>
);
