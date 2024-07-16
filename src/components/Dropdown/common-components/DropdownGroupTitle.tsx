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

export { DropdownGroupTitle };
