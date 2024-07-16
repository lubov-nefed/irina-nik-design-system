import { type dropdownValue } from "../common-components/dropdownValue";
import { BasicInput } from "../../Input/BasicInput";
import { BaseSyntheticEvent } from "react";

interface IDropdownInputProps {
  type: "multiWithTags" | "multiNoTags" | "multiWithGroups";
  size: "medium" | "big" | "small";
  icons:
    | {
        leftIconSrc: string;
        rightIconSrc: string;
      }
    | {
        rightIconSrc: string;
        leftIconSrc?: undefined;
      };
  hasSearch: boolean;
  value: string;
  validation: { isValid: boolean; validationText: string };
  isDropdownOpen: boolean;
  activeOptions: dropdownValue[];
  listName?: string;
  onInput: (e: BaseSyntheticEvent) => void;
}

function getInputValue(
  type: "multiWithTags" | "multiNoTags" | "multiWithGroups",
  activeOptions: dropdownValue[],
  listName: string,
  isDropdownOpen: boolean
) {
  const unpicked = activeOptions.length === 0;
  if (unpicked) {
    return "";
  }
  if (!unpicked && !isDropdownOpen) {
    if (type === "multiWithTags") {
      return "";
    }
    if (Array.isArray(activeOptions) && listName) {
      const isNotPicked = activeOptions.length === 0;
      const isJustOnePicked = activeOptions.length === 1;
      const pluralValue = activeOptions.length.toString() + " " + listName;
      const singularValue =
        activeOptions.length.toString() + " " + listName.slice(0, -1);
      if (isNotPicked) {
        return "";
      }
      if (isJustOnePicked) {
        return singularValue;
      }
      return pluralValue;
    }
  }
}

const MultiselectDropdownInput: React.FC<IDropdownInputProps> = (props) => {
  const value =
    Array.isArray(props.activeOptions) &&
    props.listName &&
    !props.isDropdownOpen
      ? getInputValue(
          props.type,
          props.activeOptions,
          props.listName,
          props.isDropdownOpen
        )
      : props.value;
  return (
    <BasicInput
      size={props.size}
      icons={props.icons}
      validation={{
        isValid: props.validation.isValid,
        validationText: props.validation.validationText,
      }}
      value={value}
      onInput={props.onInput}
      active={props.isDropdownOpen}
    />
  );
};

export { MultiselectDropdownInput };
