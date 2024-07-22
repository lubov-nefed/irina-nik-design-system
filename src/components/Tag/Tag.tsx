import "./Tag.css";
interface ITagProps {
  size: "medium" | "big" | "small";
  text: string;
  icon?: { position: "left" | "right"; iconSrc: string };
  handleRemove?: () => void;
}
const Tag: React.FC<ITagProps> = (props) => {
  let className = "tag font-semibold";
  if (props.size === "medium") {
    className += " tag-medium text-sm";
  }
  if (props.size === "small") {
    className += " tag-small text-xs";
  }
  if (props.size === "big") {
    className += " tag-big text-base";
  }
  return (
    <div className={className}>
      {props.icon && props.icon.position === "left" && (
        <img
          className="tag-icon tag-left-img"
          src={props.icon.iconSrc}
          alt="Tag icon"
        />
      )}
      {props.text}
      {props.icon && props.icon.position === "right" && (
        <img
          className="tag-icon tag-right-img"
          src={props.icon.iconSrc}
          alt="Tag icon"
          onClick={props.handleRemove}
        />
      )}
    </div>
  );
};
export { Tag };
