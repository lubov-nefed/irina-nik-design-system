import { type dropdownValue } from "../common-components/dropdownValue";

function getInputValue(
  type: "multiWithTags" | "multiNoTags" | "multiWithGroups",
  activeOptions: dropdownValue[],
  listName: string | undefined
) {
  const unpicked = activeOptions.length === 0;
  if (unpicked) {
    return "";
  }
  if (type === "multiWithTags") {
    return "";
  }
  if (listName) {
    const isJustOnePicked = activeOptions.length === 1;
    const pluralValue = activeOptions.length.toString() + " " + listName;
    const singularValue =
      activeOptions.length.toString() + " " + listName.slice(0, -1);
    if (isJustOnePicked) {
      return singularValue;
    }
    return pluralValue;
  }
}

export { getInputValue };
