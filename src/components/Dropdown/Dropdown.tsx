import "./Dropdown.css";
import { BaseInput } from "../Input/BaseInput";
import iconChevronDown from "../../assets/icons/input-icons/icon-chevron-down.svg";
import { useState } from "react";

interface IDropdownGroupTitleProps {
  title: string;
}
const DropdownGroupTitle: React.FC<IDropdownGroupTitleProps> = (props) => {
  return (
    <li
      className="dropdown-group-title text-xs font-semibold"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {props.title}
    </li>
  );
};

type dropdownValue = { id: string; value: string };

interface IDropdownProps {
  size: "medium" | "big" | "small";
  type:
    | {
        key: "simple" | "multiWithTags" | "multiNoTags";
        values: dropdownValue[];
      }
    | {
        key: "multiWithGroups";
        values: { popular: dropdownValue[]; others: dropdownValue[] };
      };
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
  leftIcon?: string;
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeOption, setActiveOption] = useState({ id: "", value: "" });
  const icons = props.leftIcon
    ? { leftIconSrc: props.leftIcon, rightIconSrc: iconChevronDown }
    : { rightIconSrc: iconChevronDown };

  return (
    <div
      className="dropdown-container"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
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
      {isDropdownOpen && Array.isArray(props.type.values) && (
        <ul className="dropdown-ul text-base font-normal shadow-xl">
          {props.type.values.map((item) => (
            <li
              key={item.id}
              className="dropdown-li text-sm font-normal"
              onClick={() => {
                setActiveOption(item);
              }}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
      {isDropdownOpen && !Array.isArray(props.type.values) && (
        <ul className="dropdown-ul text-base font-normal shadow-xl">
          <DropdownGroupTitle title="Popular" />
          {props.type.values.popular.map((item) => (
            <li
              key={item.id}
              className="dropdown-li grouped-li text-sm font-normal"
              onClick={() => {
                setActiveOption(item);
              }}
            >
              {item.value}
            </li>
          ))}
          <DropdownGroupTitle title="Others" />
          {props.type.values.others.map((item) => (
            <li
              key={item.id}
              className="dropdown-li grouped-li text-sm font-normal"
              onClick={() => {
                setActiveOption(item);
              }}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };
