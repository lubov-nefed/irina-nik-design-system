import { type dropdownValue } from "./dropdownValue";
import { DropdownGroupTitle } from "./DropdownGroupTitle";

import { DropdownListItem } from "./DropdownListItem";

interface IDropdownListProps {
  values:
    | dropdownValue[]
    | { popular: dropdownValue[]; others: dropdownValue[] };
  handlePick: (item: dropdownValue) => void;
  type: "simple" | "multiWithTags" | "multiNoTags" | "multiWithGroups";
  activeMultiOptions: dropdownValue[];
}

const DropdownList: React.FC<IDropdownListProps> = (props) => {
  if (Array.isArray(props.values)) {
    return (
      <ul className="dropdown-ul text-base font-normal shadow-xl">
        {props.values.map((item) => (
          <DropdownListItem
            key={item.id}
            item={item}
            onClick={() => props.handlePick(item)}
            type={props.type}
            activeMultiOptions={props.activeMultiOptions}
          />
        ))}
      </ul>
    );
  }
  if (!Array.isArray(props.values)) {
    return (
      <ul className="dropdown-ul text-base font-normal shadow-xl">
        <DropdownGroupTitle title="Popular" />
        {props.values.popular.map((item) => (
          <DropdownListItem
            key={item.id}
            item={item}
            onClick={() => props.handlePick(item)}
            type={props.type}
            activeMultiOptions={props.activeMultiOptions}
          />
        ))}
        <DropdownGroupTitle title="Others" />
        {props.values.others.map((item) => (
          <DropdownListItem
            key={item.id}
            item={item}
            onClick={() => props.handlePick(item)}
            type={props.type}
            activeMultiOptions={props.activeMultiOptions}
          />
        ))}
      </ul>
    );
  }
};

export { DropdownList };
