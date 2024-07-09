import "./Dropdown.css";
import { BaseInput } from "../Input/BaseInput";
import iconChevronDown from "../../assets/icons/input-icons/icon-chevron-down.svg";
import { useState } from "react";

interface IDropdownProps {
  size: "medium" | "big" | "small";
  values: { id: string; value: string }[];
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeOption, setActiveOption] = useState({ id: "", value: "" });
  return (
    <div
      className="dropdown-container"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <BaseInput
        size={props.size}
        icons={{ rightIconSrc: iconChevronDown }}
        placeholder={props.placeholder}
        validation={{ isValid: true, validationText: "Validation Text" }}
        value={activeOption.value}
        onInput={() => {}}
      />
      {isDropdownOpen && (
        <ul className="dropdown-ul text-base font-normal shadow-xl">
          {props.values.map((item) => (
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
    </div>
  );
};

export { Dropdown };
