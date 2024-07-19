import "./Dropdown.css";
interface IDropdownContainerProps {
  children: React.ReactNode;
  hasSearch: boolean;
}
//
/*   ${!props.active && "input-container--inactive"
} */
const DropdownContainer: React.FC<IDropdownContainerProps> = (props) => {
  return (
    <div
      className={`${
        props.hasSearch
          ? "dropdown-container dropdown-container--with-search"
          : "dropdown-container"
      }`}
    >
      {props.children}
    </div>
  );
};

export { DropdownContainer };
