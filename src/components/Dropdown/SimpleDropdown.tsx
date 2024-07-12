import { type dropdownValue } from "./dropdownValue";
import { BaseInput } from "../Input/BaseInput";

interface ISimpleDropdownProps {
  values: dropdownValue[];
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
  leftIcon?: string;
}

const SimpleDropdown: React.FC<ISimpleDropdownProps> = (props) => {
  return (
    <BaseInput
      size={props.size}
      icons={icons}
      placeholder={props.placeholder}
      validation={{
        isValid: props.validation.isValid,
        validationText: props.validation.validationText,
      }}
      value={activeOption.value}
      onInput={() => {}}
      active={isDropdownOpen}
    />
  );
};

export { SimpleDropdown };
