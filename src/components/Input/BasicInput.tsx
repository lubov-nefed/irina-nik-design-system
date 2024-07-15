import { BaseSyntheticEvent } from "react";
import "./BasicInput.css";
import { Input } from "./Input";
import { InputLabel } from "./InputLabel";

interface IBasicInputProps {
  size: "medium" | "big" | "small";
  validation: { isValid: boolean; validationText: string };
  icons?: { leftIconSrc?: string; rightIconSrc?: string };
  label?: { labelText: string; labelFor: string };
  value?: string;
  isDisabled?: boolean;
  onInput?: (e: BaseSyntheticEvent) => void;
  active?: boolean;
}

const BasicInput: React.FC<IBasicInputProps> = (props) => {
  const textSize = props.size === "small" ? "text-sm" : "text-base";
  let className = props.validation.isValid
    ? `input input-${props.size} ${textSize} font-normal`
    : `input input-${props.size} input--non-valid ${textSize} font-normal`;
  if (props.active) {
    className += " input--active";
  }

  return (
    <div className={`input-container input-container--${props.size}`}>
      {props.label && <InputLabel {...props.label} />}
      <Input
        icons={props.icons}
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

export { BasicInput };
