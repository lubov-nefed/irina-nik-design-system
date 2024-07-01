import "./Input.css";
interface IInputProps {
  size: "medium" | "big" | "small";
  type:
    | "noIcon"
    | { oneIcon: { iconPosition: "left" | "right"; iconSrc: string } }
    | { twoIcons: { leftIconSrc: string; rightIconSrc: string } };
  placeholder: string;
  isValid: boolean;
}

const Input: React.FC<IInputProps> = (props) => {
  const textSize = props.size === "small" ? "text-sm" : "text-base";
  const className = props.isValid
    ? `input input-${props.size} ${textSize} font-normal`
    : `input input-${props.size} input--non-valid ${textSize} font-normal`;

  if (props.isValid) {
    if ("noIcon" === props.type) {
      return <input placeholder={props.placeholder} className={className} />;
    }
    if ("oneIcon" in props.type) {
      return (
        <div className={`input-container input-container--${props.size}`}>
          {props.type.oneIcon.iconPosition === "left" && (
            <img
              className="input-icon input-icon--left"
              src={props.type.oneIcon.iconSrc}
              alt="Input icon"
            />
          )}
          <input placeholder={props.placeholder} className={className} />
          {props.type.oneIcon.iconPosition === "right" && (
            <img
              className="input-icon input-icon--right"
              src={props.type.oneIcon.iconSrc}
              alt="Input icon"
            />
          )}
        </div>
      );
    }
    if ("twoIcons" in props.type) {
      return (
        <div className={`input-container input-container--${props.size}`}>
          <img
            className="input-icon input-icon--left"
            src={props.type.twoIcons.leftIconSrc}
            alt="Input icon"
          />
          <input placeholder={props.placeholder} className={className} />
          <img
            className="input-icon input-icon--right"
            src={props.type.twoIcons.rightIconSrc}
            alt="Input icon"
          />
        </div>
      );
    }
  }
  if (!props.isValid) {
    if ("noIcon" === props.type) {
      return (
        <div className="input-validation-container">
          <input placeholder={props.placeholder} className={className} />
          <p className="input-validation-text text-xs font-normal">
            Validation text
          </p>
        </div>
      );
    }
    if ("oneIcon" in props.type) {
      return (
        <div
          className={`input-validation-container input-container--${props.size}`}
        >
          {props.type.oneIcon.iconPosition === "left" && (
            <img
              className="input-icon input-icon--left"
              src={props.type.oneIcon.iconSrc}
              alt="Input icon"
            />
          )}
          <input placeholder={props.placeholder} className={className} />
          {props.type.oneIcon.iconPosition === "right" && (
            <img
              className="input-icon input-icon--right"
              src={props.type.oneIcon.iconSrc}
              alt="Input icon"
            />
          )}
          <p className="input-validation-text text-xs font-normal">
            Validation text
          </p>
        </div>
      );
    }
    if ("twoIcons" in props.type) {
      return (
        <div className={`input-container input-container--${props.size}`}>
          <img
            className="input-icon input-icon--left"
            src={props.type.twoIcons.leftIconSrc}
            alt="Input icon"
          />
          <input placeholder={props.placeholder} className={className} />
          <img
            className="input-icon input-icon--right"
            src={props.type.twoIcons.rightIconSrc}
            alt="Input icon"
          />
        </div>
      );
    }
  }
};

export { Input };
