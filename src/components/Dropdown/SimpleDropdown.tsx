import { type dropdownValue } from "./dropdownValue";
import { BaseSyntheticEvent, useState } from "react";
import { DropdownContainer } from "./DropdownContainer";
import {
  InputPlaceholderContext,
  InputOnClickContext,
} from "../Input/InputContexts";
import { DropdownInput } from "./DropdownInput";
import iconChevronDown from "../../assets/icons/input-icons/icon-chevron-down.svg";
import { DropdownList } from "./DropdownList";

interface ISimpleDropdownProps {
  size: "medium" | "big" | "small";
  values: dropdownValue[];
  hasSearch: boolean;
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
  leftIcon?: string;
}

const SimpleDropdown: React.FC<ISimpleDropdownProps> = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const onInput = props.hasSearch
    ? (e: BaseSyntheticEvent) => {
        setInputValue(e.target.value);
      }
    : () => {};

  const handlePick = (item: dropdownValue) => {
    setInputValue(item.value);
    setIsDropdownOpen(false);
  };

  const icons = props.leftIcon
    ? { leftIconSrc: props.leftIcon, rightIconSrc: iconChevronDown }
    : { rightIconSrc: iconChevronDown };

  return (
    <>
      <DropdownContainer hasSearch={props.hasSearch}>
        <InputPlaceholderContext.Provider value={props.placeholder}>
          <InputOnClickContext.Provider
            value={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            <DropdownInput
              type="simple"
              size={props.size}
              icons={icons}
              value={inputValue}
              validation={{
                isValid: props.validation.isValid,
                validationText: props.validation.validationText,
              }}
              isDropdownOpen={isDropdownOpen}
              hasSearch={props.hasSearch}
              onInput={onInput}
            />
          </InputOnClickContext.Provider>
        </InputPlaceholderContext.Provider>
        {isDropdownOpen && (
          <DropdownList
            values={props.values}
            handlePick={handlePick}
            type="simple"
          />
        )}
      </DropdownContainer>
    </>
  );
};

export { SimpleDropdown };
