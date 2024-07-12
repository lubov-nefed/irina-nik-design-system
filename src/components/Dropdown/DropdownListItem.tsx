import { type dropdownValue } from "./dropdownValue";

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
        props.activeMultiOptions.includes(props.item) && <div>picked</div>}
      {props.item.value}
    </li>
  );
};

export { DropdownListItem };
