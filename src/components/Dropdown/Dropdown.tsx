import "./Dropdown.css";

interface IDropdownProps {
  size: "medium" | "big" | "small";
  values: { id: number; value: string }[];
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
  return (
    <select className="dropdown">
      <option className="dropdown-placeholder" defaultValue={props.placeholder}>
        {props.placeholder}
      </option>
      {props.values.map((item) => (
        <option key={item.id} className="dropdown-option">
          {item.value}
        </option>
      ))}
    </select>
  );
};

export { Dropdown };
