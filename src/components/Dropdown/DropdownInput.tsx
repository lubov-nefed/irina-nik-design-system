import { type dropdownValue } from "./dropdownValue";
import { BasicInput } from "../Input/BasicInput";
import { BaseSyntheticEvent } from "react";

interface IDropdownInputProps {
  type: "simple" | "multiWithTags" | "multiNoTags" | "multiWithGroups";
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
  activeOptions?: dropdownValue | dropdownValue[];
  listName?: string;
  onInput: (e: BaseSyntheticEvent) => void;
}

function getInputValue(activeOptions: dropdownValue[], listName: string) {
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

const DropdownInput: React.FC<IDropdownInputProps> = (props) => {
  const value =
    Array.isArray(props.activeOptions) && props.listName && !props.hasSearch
      ? getInputValue(props.activeOptions, props.listName)
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

export { DropdownInput };
