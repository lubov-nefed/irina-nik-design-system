import "./Stepper.css";
import { InputPlaceholderContext } from "../Input/InputContexts";
import iconMinus from "../../assets/icons/button-icons/icon-minus.svg";
import iconPlus from "../../assets/icons/button-icons/icon-plus.svg";
import { Button } from "../Button/Button";
import { BasicInput } from "../Input/BasicInput";
import { useState, BaseSyntheticEvent } from "react";
interface IStepperProps {
  size: "medium" | "big" | "small";
}
const Stepper: React.FC<IStepperProps> = (props) => {
  const [value, setValue] = useState("");
  const onClick = (buttonType: "increase" | "decrease") => {
    let numberValue = +value;
    buttonType === "increase" ? numberValue++ : numberValue--;
    if (numberValue < 0) {
      numberValue = 0;
    }
    const nextValue = numberValue.toString();
    setValue(nextValue);
  };
  const onInput = (e: BaseSyntheticEvent) => {
    setValue(e.target.value);
  };

  return (
    <div className={`stepper stepper-${props.size}`}>
      <div className="stepper-btn">
        <Button
          size={props.size}
          style={"secondary"}
          type={{ iconOnly: { iconSrc: iconMinus, tooltip: "Decrease" } }}
          loading={false}
          disabled={false}
          onClick={() => onClick("decrease")}
        />
      </div>
      <InputPlaceholderContext.Provider value="0">
        <BasicInput
          size={props.size}
          validation={{ isValid: true, validationText: "" }}
          value={value}
          isDisabled={false}
          onInput={onInput}
        />
      </InputPlaceholderContext.Provider>
      <div className="stepper-btn">
        <Button
          size={props.size}
          style={"secondary"}
          type={{ iconOnly: { iconSrc: iconPlus, tooltip: "Increase" } }}
          loading={false}
          disabled={false}
          onClick={() => onClick("increase")}
        />
      </div>
    </div>
  );
};

export { Stepper };
