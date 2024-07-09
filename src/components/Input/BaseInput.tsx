import { BaseSyntheticEvent } from "react";
import "./BaseInput.css";
import { Input } from "./Input";
import { InputLabel } from "./InputLabel";

interface IBaseInputProps {
  size: "medium" | "big" | "small";
  placeholder: string;
  validation: { isValid: boolean; validationText: string };
  icons?: { leftIconSrc?: string; rightIconSrc?: string };
  label?: { labelText: string; labelFor: string };
  value?: string;
  isDisabled?: boolean;
  onInput?: (e: BaseSyntheticEvent) => void;
}

const BaseInput: React.FC<IBaseInputProps> = (props) => {
  const textSize = props.size === "small" ? "text-sm" : "text-base";
  const className = props.validation.isValid
    ? `input input-${props.size} ${textSize} font-normal`
    : `input input-${props.size} input--non-valid ${textSize} font-normal`;

  return (
    <div className={`input-container input-container--${props.size}`}>
      {props.label && <InputLabel {...props.label} />}
      <Input
        icons={props.icons}
        placeholder={props.placeholder}
        className={className}
        value={props.value}
        onInput={props.onInput}
        isDisabled={props.isDisabled}
        id={props.label?.labelFor}
      />
      {!props.validation.isValid && (
        <p className="input-validation-text text-xs font-normal">
          {props.validation.validationText}
        </p>
      )}
    </div>
  );
};

export { BaseInput };
