import { BaseSyntheticEvent } from "react";
import { type dropdownValue } from "../common-components/dropdownValue";
import { BasicInput } from "../../Input/BasicInput";

interface ISimpleDropdownInputProps {
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

const SimpleDropdownInput: React.FC<ISimpleDropdownInputProps> = (props) => {
  return (
    <BasicInput
      size={props.size}
      icons={props.icons}
      validation={{
        isValid: props.validation.isValid,
        validationText: props.validation.validationText,
      }}
      value={props.value}
      onInput={props.onInput}
      active={props.isDropdownOpen}
    />
  );
};

export { SimpleDropdownInput };
