import "./Input.css";
import { NoIconInput } from "./NoIconInput";
import { WithIconsInput } from "./WithIconsInput";

interface IInputProps {
  size: "medium" | "big" | "small";
  type:
    | "noIcon"
    | { withIcons: { leftIconSrc?: string; rightIconSrc?: string } };
  placeholder: string;
  isValid: boolean;
  label?: { labelText: string; labelFor: string };
}

const Input: React.FC<IInputProps> = (props) => {
  const textSize = props.size === "small" ? "text-sm" : "text-base";
  const className = props.isValid
    ? `input input-${props.size} ${textSize} font-normal`
    : `input input-${props.size} input--non-valid ${textSize} font-normal`;

  if (props.label) {
    return (
      <label htmlFor={props.label.labelFor}>{props.label.labelText}</label>
    );
  }

  if (props.isValid) {
    if ("noIcon" === props.type) {
      return (
        <NoIconInput placeholder={props.placeholder} className={className} />
      );
    }
    if ("withIcons" in props.type) {
      return (
        <div className={`input-container input-container--${props.size}`}>
          <WithIconsInput
            icons={props.type.withIcons}
            placeholder={props.placeholder}
            className={className}
          />
        </div>
      );
    }
  }
  if (!props.isValid) {
    if ("noIcon" === props.type) {
      return (
        <div className="input-validation-container">
          <NoIconInput placeholder={props.placeholder} className={className} />
          <p className="input-validation-text text-xs font-normal">
            Validation text
          </p>
        </div>
      );
    }
    if ("withIcons" in props.type) {
      return (
        <div className={`input-container input-container--${props.size}`}>
          <WithIconsInput
            icons={props.type.withIcons}
            placeholder={props.placeholder}
            className={className}
          />
          <p className="input-validation-text text-xs font-normal">
            Validation text
          </p>
        </div>
      );
    }
  }
};

export { Input };
