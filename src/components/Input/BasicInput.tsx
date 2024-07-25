import { BaseSyntheticEvent, useState, useContext } from "react";
import "./BasicInput.css";
import { InputPlaceholderContext, InputOnClickContext } from "./InputContexts";
import { InputLabel } from "./InputLabel";
import { InputIcon } from "./InputIcon";

interface IBasicInputProps {
  size: "medium" | "big" | "small";
  validation: { isValid: boolean; validationText: string };
  parentComponent?: "dropdown" | "phone-number";
  icons?: { leftIconSrc?: string; rightIconSrc?: string };
  label?: { labelText: string; labelFor: string };
  value?: string | number;
  isDisabled?: boolean;
  onInput?: (e: BaseSyntheticEvent) => void;
  inputType?: "password" | "number" | "tel";
}

const BasicInput: React.FC<IBasicInputProps> = (props) => {
  const placeholder = useContext(InputPlaceholderContext);
  const onClick = useContext(InputOnClickContext);
  const [inputValue, setInputValue] = useState("");
  const value = props.value || inputValue;
  const handleInput = (e: BaseSyntheticEvent) => setInputValue(e.target.value);
  const onInputFn = props.onInput || handleInput;
  const textSize = props.size === "small" ? "text-sm" : "text-base";
  let className =
    props.parentComponent === undefined
      ? "input basic-input"
      : `input ${props.parentComponent}-input`;
  className += ` input-${props.size} ${textSize} font-normal`;
  if (!props.validation.isValid) {
    className += " input--non-valid";
  }

  return (
    <div
      className={`input-container input-container-${props.parentComponent} input-container--${props.size}`}
    >
      {props.label && <InputLabel {...props.label} />}
      <>
        {props.icons && props.icons.leftIconSrc && (
          <InputIcon iconPosition={"left"} iconSrc={props.icons.leftIconSrc} />
        )}
        <input
          id={props.label?.labelText}
          placeholder={placeholder}
          className={className}
          value={value}
          onInput={onInputFn}
          disabled={props.isDisabled}
          onClick={onClick}
          type={props.inputType}
        />
        {props.icons && props.icons.rightIconSrc && (
          <InputIcon
            iconPosition={"right"}
            iconSrc={props.icons.rightIconSrc}
          />
        )}
      </>
      {!props.validation.isValid && (
        <p className="input-validation-text text-xs font-normal">
          {props.validation.validationText}
        </p>
      )}
    </div>
  );
};

export { BasicInput };
