import "./Dropdown.css";
interface IDropdownContainerProps {
  children: React.ReactNode;
  hasSearch: boolean;
  isActive: boolean;
}
const DropdownContainer: React.FC<IDropdownContainerProps> = (props) => {
  let className = "dropdown-container";
  if (props.hasSearch) {
    className += " dropdown-container--with-search";
  }
  if (props.isActive) {
    className += " dropdown-container--active";
  }

  return <div className={className}>{props.children}</div>;
};

export { DropdownContainer };
