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
import { DropdownTag } from "./DropdownTag";

interface IMultiSelectDropdownProps {
  size: "medium" | "big" | "small";
  type:
    | { key: "multiWithTags"; values: dropdownValue[] }
    | {
        key: "multiNoTags";
        values: dropdownValue[];
        listName: string;
      }
    | {
        key: "multiWithGroups";
        values: { popular: dropdownValue[]; others: dropdownValue[] };
        listName: string;
      };
  values: dropdownValue[];
  hasSearch: boolean;
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
  leftIcon?: string;
}

const MultiSelectDropdown: React.FC<IMultiSelectDropdownProps> = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeOptions, setActiveOptions] = useState<dropdownValue[]>([]);
  const icons = props.leftIcon
    ? { leftIconSrc: props.leftIcon, rightIconSrc: iconChevronDown }
    : { rightIconSrc: iconChevronDown };

  const [inputValue, setInputValue] = useState("");

  const onInput = props.hasSearch
    ? (e: BaseSyntheticEvent) => {
        setInputValue(e.target.value);
      }
    : () => {};

  const handlePick = (item: dropdownValue) => {
    if (activeOptions.includes(item)) {
      setActiveOptions(activeOptions.filter((option) => option.id !== item.id));
      return;
    }
    setActiveOptions([...activeOptions, item]);
  };

  return (
    <DropdownContainer hasSearch={props.hasSearch}>
      <InputPlaceholderContext.Provider value={props.placeholder}>
        <InputOnClickContext.Provider
          value={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <DropdownInput
            type={props.type.key}
            size={props.size}
            icons={icons}
            value={inputValue}
            validation={{
              isValid: props.validation.isValid,
              validationText: props.validation.validationText,
            }}
            activeOptions={activeOptions}
            listName={
              props.type.key === "multiNoTags" ||
              props.type.key === "multiWithGroups"
                ? props.type.listName
                : undefined
            }
            isDropdownOpen={isDropdownOpen}
            hasSearch={props.hasSearch}
            onInput={onInput}
          />
        </InputOnClickContext.Provider>
      </InputPlaceholderContext.Provider>
      {props.type.key === "multiWithTags" &&
        Array.isArray(activeOptions) &&
        !isDropdownOpen && (
          <div className="tags-container">
            {activeOptions.map((item) => (
              <DropdownTag key={item.value} text={item.value} />
            ))}
          </div>
        )}
      {isDropdownOpen && (
        <DropdownList
          values={props.type.values}
          handlePick={handlePick}
          type={props.type.key}
          activeMultiOptions={activeOptions}
        />
      )}
    </DropdownContainer>
  );
};

export { MultiSelectDropdown };
