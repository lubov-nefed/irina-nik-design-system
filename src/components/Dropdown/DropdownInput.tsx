import { type dropdownValue } from "./dropdownValue";
import { BaseInput } from "../Input/BaseInput";

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
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
  isDropdownOpen: boolean;
  activeSingleOption: dropdownValue;
  activeMultiOptions: dropdownValue[];
  listName?: string;
}

function getInputValue(
  activeOptions:
    | { single: dropdownValue }
    | { multi: dropdownValue[]; listName: string | undefined }
) {
  if ("single" in activeOptions) {
    return activeOptions.single.value;
  }
  if ("multi" in activeOptions) {
    const isNotPicked = activeOptions.multi.length === 0;
    const isJustOnePicked = activeOptions.multi.length === 1;
    const pluralValue =
      activeOptions.multi.length.toString() + " " + activeOptions.listName;
    const singularValue =
      activeOptions.multi.length.toString() +
      " " +
      activeOptions.listName?.slice(0, -1);
    if (isNotPicked) {
      return "";
    }
    if (isJustOnePicked) {
      return singularValue;
    }
    return pluralValue;
  }
}

const DropdownInput: React.FC<IDropdownInputProps> = (props) => {
  const value =
    props.type === "simple" || props.type === "multiWithTags"
      ? getInputValue({ single: props.activeSingleOption })
      : getInputValue({
          multi: props.activeMultiOptions,
          listName: props.listName,
        });
  return (
    <BaseInput
      size={props.size}
      icons={props.icons}
      placeholder={props.placeholder}
      validation={{
        isValid: props.validation.isValid,
        validationText: props.validation.validationText,
      }}
      value={value}
      onInput={() => {}}
      active={props.isDropdownOpen}
    />
  );
};

export { DropdownInput };
