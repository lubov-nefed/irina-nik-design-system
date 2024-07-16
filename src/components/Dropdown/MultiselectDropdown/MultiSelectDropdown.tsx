import { type dropdownValue } from "../common-components/dropdownValue";
import { BaseSyntheticEvent, useState } from "react";
import { DropdownContainer } from "../common-components/DropdownContainer";
import {
  InputPlaceholderContext,
  InputOnClickContext,
} from "../../Input/InputContexts";
import { MultiselectDropdownInput } from "./MultiselectDropdownInput";
import iconChevronDown from "../../../assets/icons/input-icons/icon-chevron-down.svg";
import { DropdownList } from "../common-components/DropdownList";
import { DropdownTag } from "../common-components/DropdownTag";

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

const ungroupValues = (groupedValues: {
  popular: dropdownValue[];
  others: dropdownValue[];
}) => {
  const ungroupedValues = groupedValues.popular.concat(groupedValues.others);
  return ungroupedValues;
};

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

  const handlePick = noSearchResults
    ? () => {}
    : (item: dropdownValue) => {
        if (activeOptions.includes(item)) {
          setActiveOptions(
            activeOptions.filter((option) => option.id !== item.id)
          );
          return;
        }
        setActiveOptions([...activeOptions, item]);
      };

  const handleSearch = (e: BaseSyntheticEvent) => {
    const values = Array.isArray(props.type.values)
      ? props.type.values
      : ungroupValues(props.type.values);

    setInputValue(e.target.value);

    if (e.target.value === "") {
      setListValues(props.type.values);
      return;
    }

    const newList = values.filter((item) =>
      item.value.toLowerCase().includes(e.target.value.toLowerCase())
    );

    const noResults = newList.length === 0;
    if (noResults) {
      setListValues([{ id: "empty", value: "No results" }]);
    } else {
      setListValues(newList);
    }
  };

  const onInput = props.hasSearch && isDropdownOpen ? handleSearch : () => {};

  return (
    <DropdownContainer hasSearch={props.hasSearch}>
      <InputPlaceholderContext.Provider value={props.placeholder}>
        <InputOnClickContext.Provider
          value={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <MultiselectDropdownInput
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
