import "./Dropdown.css";
import { BaseInput } from "../Input/BaseInput";
import iconChevronDown from "../../assets/icons/input-icons/icon-chevron-down.svg";
import { useState } from "react";
import { DropdownGroupTitle } from "./DropdownGroupTitle";
import { DropdownTag } from "./DropdownTag";

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

  const isMultiselect = props.type.key !== "simple";
  const [multiselect, setMultiselect] = useState<dropdownValue[]>([]);

  const handleSinglePick = (item: dropdownValue) => {
    setActiveOption(item);
  };
  const handleMultiPick = (item: dropdownValue) => {
    if (multiselect.includes(item)) return;
    setMultiselect([...multiselect, item]);
  };
  const handlePick = isMultiselect ? handleMultiPick : handleSinglePick;

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
      {/* === Render Tags for Multiselect WithTags === */}
      {props.type.key === "multiWithTags" && (
        <div className="tags-container">
          {multiselect.map((item) => (
            <DropdownTag key={item.value} text={item.value} />
          ))}
        </div>
      )}
      {/* === Render List If it is not Multi With Groupes === */}
      {isDropdownOpen && Array.isArray(props.type.values) && (
        <ul className="dropdown-ul text-base font-normal shadow-xl">
          {props.type.values.map((item) => (
            <li
              key={item.id}
              className="dropdown-li text-sm font-normal"
              onClick={() => handlePick(item)}
            >
              {isMultiselect &&
                props.type.key !== "multiWithTags" &&
                multiselect.includes(item) && <div>picked</div>}
              {item.value}
            </li>
          ))}
        </ul>
      )}
      {/* === Render List With Groupes === */}
      {isDropdownOpen && !Array.isArray(props.type.values) && (
        <ul className="dropdown-ul text-base font-normal shadow-xl">
          <DropdownGroupTitle title="Popular" />
          {props.type.values.popular.map((item) => (
            <li
              key={item.id}
              className="dropdown-li grouped-li text-sm font-normal"
              onClick={() => handlePick(item)}
            >
              {multiselect.includes(item) && <div>picked</div>}
              {item.value}
            </li>
          ))}
          <DropdownGroupTitle title="Others" />
          {props.type.values.others.map((item) => (
            <li
              key={item.id}
              className="dropdown-li grouped-li text-sm font-normal"
              onClick={() => {
                handlePick(item);
              }}
            >
              {multiselect.includes(item) && <div>picked</div>}
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };
