import "./BaseInput.css";
import { Input } from "./Input";
import { InputLabel } from "./InputLabel";

interface IBaseInputProps {
  size: "medium" | "big" | "small";
  icons?: { leftIconSrc?: string; rightIconSrc?: string };
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
  label?: { labelText: string; labelFor: string };
}

const BaseInput: React.FC<IBaseInputProps> = (props) => {
  const textSize = props.size === "small" ? "text-sm" : "text-base";
  const className = props.validation.isValid
    ? `input input-${props.size} ${textSize} font-normal`
    : `input input-${props.size} input--non-valid ${textSize} font-normal`;

  if (props.validation.isValid) {
    return (
      <div className={`input-container input-container--${props.size}`}>
        {props.label && <InputLabel {...props.label} />}
        <Input
          icons={props.icons}
          placeholder={props.placeholder}
          className={className}
        />
      </div>
    );
  }
  if (!props.validation.isValid) {
    return (
      <div className={`input-container input-container--${props.size}`}>
        {props.label && <InputLabel {...props.label} />}
        <Input
          icons={props.icons}
          placeholder={props.placeholder}
          className={className}
        />
        <p className="input-validation-text text-xs font-normal">
          {props.validation.validationText}
        </p>
      </div>
    );
  }
};

export { BaseInput };
