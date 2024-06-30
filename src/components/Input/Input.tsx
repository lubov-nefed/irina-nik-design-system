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
    return <input placeholder={props.placeholder} className={className} />;
  }
  if (!props.isValid) {
    return (
      <div className="input-validation-container">
        <input placeholder={props.placeholder} className={className} />
        <p className="input-validation-text text-xs font-normal">
          Validation text
        </p>
      </div>
    );
  }
};

export { Input };
