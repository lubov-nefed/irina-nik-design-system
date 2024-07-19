import { type dropdownValue } from "../common-components/dropdownValue";
import { BaseSyntheticEvent, useState } from "react";
import { DropdownContainer } from "../common-components/DropdownContainer";
import {
  InputPlaceholderContext,
  InputOnClickContext,
} from "../../Input/InputContexts";
import { SimpleDropdownInput } from "./SimpleDropdownInput";
import iconChevronDown from "../../../assets/icons/input-icons/icon-chevron-down.svg";
import { DropdownList } from "../common-components/DropdownList";

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
  const [listValues, setListValues] = useState(props.values);

  const [inputValue, setInputValue] = useState("");
  const onInput = props.hasSearch
    ? (e: BaseSyntheticEvent) => {
        setInputValue(e.target.value);
        setListValues(
          props.values.filter((item) =>
            item.value.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
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
            <SimpleDropdownInput
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
            values={listValues}
            handlePick={handlePick}
            type="simple"
          />
        )}
      </DropdownContainer>
    </>
  );
};

export { SimpleDropdown };
