import { type dropdownValue } from "../common-components/dropdownValue";
import { BaseSyntheticEvent, useState } from "react";
import { DropdownContainer } from "../common-components/DropdownContainer";
import {
  InputPlaceholderContext,
  InputOnClickContext,
} from "../../Input/InputContexts";
import { BasicInput } from "../../Input/BasicInput";
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
        const newList = props.values.filter((item) =>
          item.value.toLowerCase().includes(e.target.value.toLowerCase())
        );
        const noResults = newList.length === 0;
        if (noResults) {
          setListValues([{ id: "empty", value: "No results" }]);
        } else {
          setListValues(newList);
        }
      }
    : () => {};

  const noSearchResults =
    Array.isArray(listValues) && listValues[0].id === "empty";

  const handlePick = noSearchResults
    ? () => {}
    : (item: dropdownValue) => {
        setInputValue(item.value);
        setIsDropdownOpen(false);
      };

  const icons = props.leftIcon
    ? { leftIconSrc: props.leftIcon, rightIconSrc: iconChevronDown }
    : { rightIconSrc: iconChevronDown };

  return (
    <>
      <DropdownContainer hasSearch={props.hasSearch} isActive={isDropdownOpen}>
        <InputPlaceholderContext.Provider value={props.placeholder}>
          <InputOnClickContext.Provider
            value={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            <BasicInput
              size={props.size}
              icons={icons}
              validation={{
                isValid: props.validation.isValid,
                validationText: props.validation.validationText,
              }}
              value={inputValue}
              onInput={onInput}
              parentComponent={"dropdown"}
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
