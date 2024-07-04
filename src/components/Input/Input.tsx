import "./Input.css";
import { NoIconInput } from "./NoIconInput";
import { WithIconsInput } from "./WithIconsInput";
import { InputLabel } from "./InputLabel";

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

  if (props.isValid) {
    return (
      <>
        {props.label && <InputLabel {...props.label} />}
        {"noIcon" === props.type && (
          <NoIconInput placeholder={props.placeholder} className={className} />
        )}
        {typeof props.type === "object" && (
          <div className={`input-container input-container--${props.size}`}>
            {props.label && <InputLabel {...props.label} />}
            <WithIconsInput
              icons={props.type.withIcons}
              placeholder={props.placeholder}
              className={className}
            />
          </div>
        )}
      </>
    );
  }
  if (!props.isValid) {
    if ("noIcon" === props.type) {
      return (
        <div className="input-validation-container">
          {props.label && <InputLabel {...props.label} />}
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
          {props.label && <InputLabel {...props.label} />}
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
