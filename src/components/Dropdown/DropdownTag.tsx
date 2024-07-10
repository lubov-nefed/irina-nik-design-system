import iconCloseTag from "../../assets/icons/input-icons/icon-close-tag.svg";

interface IMultiselectTagProps {
  text: string;
}

const DropdownTag: React.FC<IMultiselectTagProps> = (props) => {
  return (
    <div className="dropdown-tag text-sm font-semibold">
      {props.text}{" "}
      <img className="close-tag-img" src={iconCloseTag} alt="Close icon" />
    </div>
  );
};

export { DropdownTag };
