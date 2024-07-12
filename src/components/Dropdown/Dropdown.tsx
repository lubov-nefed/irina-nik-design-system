import "./Dropdown.css";
import iconChevronDown from "../../assets/icons/input-icons/icon-chevron-down.svg";
import { useState } from "react";
import { DropdownList } from "./DropdownList";
import { DropdownTag } from "./DropdownTag";
import { type dropdownValue } from "./dropdownValue";
import { DropdownInput } from "./DropdownInput";

interface IDropdownProps {
  size: "medium" | "big" | "small";
  type:
    | {
        key: "simple" | "multiWithTags";
        values: dropdownValue[];
      }
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
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
  leftIcon?: string;
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSingleOption, setActiveSingleOption] = useState({
    id: "",
    value: "",
  });
  const [activeMultiOptions, setActiveMultiOptions] = useState<dropdownValue[]>(
    []
  );

  const icons = props.leftIcon
    ? { leftIconSrc: props.leftIcon, rightIconSrc: iconChevronDown }
    : { rightIconSrc: iconChevronDown };

  const handleSinglePick = (item: dropdownValue) => {
    setActiveSingleOption(item);
  };
  const handleMultiPick = (item: dropdownValue) => {
    if (activeMultiOptions.includes(item)) {
      if (
        props.type.key === "multiNoTags" ||
        props.type.key === "multiWithGroups"
      ) {
        setActiveMultiOptions(
          activeMultiOptions.filter((option) => option.id !== item.id)
        );
      }
      return;
    }
    setActiveMultiOptions([...activeMultiOptions, item]);
  };
  const isMultiselect = props.type.key !== "simple";
  const handlePick = isMultiselect ? handleMultiPick : handleSinglePick;

  return (
    <div
      className="dropdown-container"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <DropdownInput
        type={props.type.key}
        size={props.size}
        icons={icons}
        placeholder={props.placeholder}
        validation={{
          isValid: props.validation.isValid,
          validationText: props.validation.validationText,
        }}
        activeSingleOption={activeSingleOption}
        activeMultiOptions={activeMultiOptions}
        listName={
          props.type.key === "multiNoTags" ||
          props.type.key === "multiWithGroups"
            ? props.type.listName
            : undefined
        }
        isDropdownOpen={isDropdownOpen}
      />
      {props.type.key === "multiWithTags" && (
        <div className="tags-container">
          {activeMultiOptions.map((item) => (
            <DropdownTag key={item.value} text={item.value} />
          ))}
        </div>
      )}
      {isDropdownOpen && (
        <DropdownList
          values={props.type.values}
          handlePick={handlePick}
          type={props.type.key}
          activeMultiOptions={activeMultiOptions}
        />
      )}
    </div>
  );
};

export { Dropdown };
