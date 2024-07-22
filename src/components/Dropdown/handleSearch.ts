import { type dropdownValue } from "./common-components/dropdownValue";
import { BaseSyntheticEvent } from "react";

const ungroupValues = (groupedValues: {
  popular: dropdownValue[];
  others: dropdownValue[];
}) => {
  const ungroupedValues = groupedValues.popular.concat(groupedValues.others);
  return ungroupedValues;
};

const handleSearch = (
  e: BaseSyntheticEvent,
  values:
    | dropdownValue[]
    | {
        popular: dropdownValue[];
        others: dropdownValue[];
      },
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setListValues: React.Dispatch<React.SetStateAction<
    | dropdownValue[]
    | {
        popular: dropdownValue[];
        others: dropdownValue[];
      }
  >>
) => {
  const ungroupedValues = Array.isArray(values)
    ? values
    : ungroupValues(values);

  setInputValue(e.target.value);

  if (e.target.value === "") {
    setListValues(values);
    return;
  }

  const newList = ungroupedValues.filter((item) =>
    item.value.toLowerCase().includes(e.target.value.toLowerCase())
  );

  const noResults = newList.length === 0;
  if (noResults) {
    setListValues([{ id: "empty", value: "No results" }]);
  } else {
    setListValues(newList);
  }
};

export { handleSearch };
