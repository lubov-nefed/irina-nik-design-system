import { type dropdownValue } from "./dropdownValue";
import iconCheck from "../../assets/icons/input-icons/icon-check.svg";

interface IDropdownListItemProps {
  item: dropdownValue;
  onClick: () => void;
  type: "simple" | "multiWithTags" | "multiNoTags" | "multiWithGroups";
  activeMultiOptions: dropdownValue[];
}

const DropdownListItem: React.FC<IDropdownListItemProps> = (props) => {
  return (
    <li
      className={`dropdown-li ${
        props.type === "multiWithGroups" && "grouped-li"
      } text-sm font-normal`}
      onClick={props.onClick}
    >
      {props.type !== "simple" &&
        props.activeMultiOptions.length > 0 &&
        props.activeMultiOptions.includes(props.item) && (
          <img src={iconCheck} />
        )}
      {props.item.value}
    </li>
  );
};

export { DropdownListItem };
