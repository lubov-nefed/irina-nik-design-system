import { type dropdownValue } from "./dropdownValue";
import { DropdownGroupTitle } from "./DropdownGroupTitle";
import { BaseSyntheticEvent } from "react";
import { DropdownListItem } from "./DropdownListItem";

interface IDropdownListProps {
  values:
    | dropdownValue[]
    | { popular: dropdownValue[]; others: dropdownValue[] };
  handlePick: (item: dropdownValue, e: BaseSyntheticEvent) => void;
  type: "simple" | "multiWithTags" | "multiNoTags" | "multiWithGroups";
  activeMultiOptions?: dropdownValue[];
}

const DropdownList: React.FC<IDropdownListProps> = (props) => {
  const classType =
    props.type === "simple" ? "dropdown-ul--simple" : "dropdown-ul--multi";
  const className = `dropdown-ul ${classType} text-base font-normal shadow-xl`;
  if (Array.isArray(props.values)) {
    return (
      <ul className={className}>
        {props.values.map((item) => (
          <DropdownListItem
            key={item.id}
            item={item}
            onClick={(e) => props.handlePick(item, e)}
            type={props.type}
            activeMultiOptions={props.activeMultiOptions}
          />
        ))}
      </ul>
    );
  }
  if (!Array.isArray(props.values)) {
    return (
      <ul className={className}>
        <DropdownGroupTitle title="Popular" />
        {props.values.popular.map((item) => (
          <DropdownListItem
            key={item.id}
            item={item}
            onClick={(e) => props.handlePick(item, e)}
            type={props.type}
            activeMultiOptions={props.activeMultiOptions}
          />
        ))}
        <DropdownGroupTitle title="Others" />
        {props.values.others.map((item) => (
          <DropdownListItem
            key={item.id}
            item={item}
            onClick={(e) => props.handlePick(item, e)}
            type={props.type}
            activeMultiOptions={props.activeMultiOptions}
          />
        ))}
      </ul>
    );
  }
};

export { DropdownList };
