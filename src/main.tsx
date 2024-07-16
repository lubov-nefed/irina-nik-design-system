import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* === Cut below later === */
const fruits = [
  { id: "1", value: "Apples" },
  { id: "2", value: "Bananas" },
  { id: "3", value: "Oranges" },
  { id: "4", value: "Peaches" },
];
const fruitsWithGroups = {
  popular: fruits,
  others: [
    { id: "5", value: "Kiwi" },
    { id: "6", value: "Pear" },
    { id: "7", value: "Lemons" },
    { id: "8", value: "Plums" },
  ],
};

import { MultiSelectDropdown } from "./components/Dropdown/MultiselectDropdown/MultiSelectDropdown";
/* === Cut above later === */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <br />
    Multi
    <br />
    multiWithTags
    <br />
    <MultiSelectDropdown
      size="medium"
      type={{ key: "multiWithTags", values: fruits }}
      hasSearch={true}
      placeholder="Choose fruits"
      validation={{ isValid: true, validationText: "Validation Text" }}
    />
    <br />
    multiNoTags
    <br />
    <MultiSelectDropdown
      size="medium"
      type={{ key: "multiNoTags", values: fruits, listName: "fruits" }}
      hasSearch={true}
      placeholder="Choose fruits"
      validation={{ isValid: true, validationText: "Validation Text" }}
    />
    <br />
    multiWithGroups
    <br />
    <MultiSelectDropdown
      size="medium"
      type={{
        key: "multiWithGroups",
        values: fruitsWithGroups,
        listName: "fruits",
      }}
      hasSearch={true}
      placeholder="Choose fruits"
      validation={{ isValid: true, validationText: "Validation Text" }}
    />
  </React.StrictMode>
);
