import { type dropdownValue } from "./dropdownValue";
import iconCheck from "../../../assets/icons/input-icons/icon-check.svg";
import { BaseSyntheticEvent } from "react";

interface IDropdownListItemProps {
  item: dropdownValue;
  onClick: (e: BaseSyntheticEvent) => void;
  type: "simple" | "multiWithTags" | "multiNoTags" | "multiWithGroups";
  activeMultiOptions: dropdownValue | dropdownValue[];
}

const DropdownListItem: React.FC<IDropdownListItemProps> = (props) => {
  return (
    <li className={`dropdown-li text-sm font-normal`} onClick={props.onClick}>
      {props.type !== "simple" &&
        Array.isArray(props.activeMultiOptions) &&
        props.activeMultiOptions.length > 0 &&
        props.activeMultiOptions.includes(props.item) && (
          <img src={iconCheck} className="dropdown-checked-img" />
        )}
      {props.item.value}
    </li>
  );
};

export { DropdownListItem };
