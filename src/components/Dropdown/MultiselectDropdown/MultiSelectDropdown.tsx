import { type dropdownValue } from "../common-components/dropdownValue";
import { BaseSyntheticEvent, useState } from "react";
import { DropdownContainer } from "../common-components/DropdownContainer";
import {
  InputPlaceholderContext,
  InputOnClickContext,
} from "../../Input/InputContexts";
import iconChevronDown from "../../../assets/icons/input-icons/icon-chevron-down.svg";
import iconCloseTag from "../../../assets/icons/input-icons/icon-close-tag.svg";
import { DropdownList } from "../common-components/DropdownList";
import { BasicInput } from "../../Input/BasicInput";
import { handleSearch } from "../handleSearch";
import { getInputValue } from "./getInputValue";
import { Tag } from "../../Tag/Tag";

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
  const [listValues, setListValues] = useState(props.type.values);

  const noSearchResults =
    Array.isArray(listValues) && listValues[0].id === "empty";

  const handleRemove = (
    item: dropdownValue,
    activeOptions: dropdownValue[]
  ) => {
    setActiveOptions(activeOptions.filter((option) => option.id !== item.id));
  };

  const handlePick = noSearchResults
    ? () => {}
    : (item: dropdownValue) => {
        if (activeOptions.includes(item)) {
          handleRemove(item, activeOptions);
          return;
        }
        setActiveOptions([...activeOptions, item]);
      };

  const handleInput =
    props.hasSearch && isDropdownOpen
      ? (e: BaseSyntheticEvent) =>
          handleSearch(e, props.type.values, setInputValue, setListValues)
      : () => {};

  const value = !isDropdownOpen
    ? getInputValue(
        props.type.key,
        activeOptions,
        props.type.key === "multiNoTags" || props.type.key === "multiWithGroups"
          ? props.type.listName
          : undefined
      )
    : inputValue;
  return (
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
            value={value}
            onInput={handleInput}
            parentComponent={"dropdown"}
          />
        </InputOnClickContext.Provider>
      </InputPlaceholderContext.Provider>
      {props.type.key === "multiWithTags" &&
        Array.isArray(activeOptions) &&
        !isDropdownOpen && (
          <div className="tags-container">
            {activeOptions.map((item) => (
              <Tag
                size={props.size}
                key={item.value}
                text={item.value}
                icon={{ position: "right", iconSrc: iconCloseTag }}
                handleRemove={() => handleRemove(item, activeOptions)}
              />
            ))}
          </div>
        )}
      {isDropdownOpen && (
        <DropdownList
          values={listValues}
          handlePick={handlePick}
          type={props.type.key}
          activeMultiOptions={activeOptions}
        />
      )}
    </DropdownContainer>
  );
};

export { MultiSelectDropdown };
