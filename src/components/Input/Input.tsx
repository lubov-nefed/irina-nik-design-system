import { BaseSyntheticEvent, useState } from "react";
import { useContext } from "react";
import { InputPlaceholderContext, InputOnClickContext } from "./InputContexts";

interface IInputProps {
  className: string;
  id?: string;
  icons?: { leftIconSrc?: string; rightIconSrc?: string };
  value?: string;
  onInput?: (e: BaseSyntheticEvent) => void;
  isDisabled?: boolean;
}

const Input: React.FC<IInputProps> = (props: IInputProps) => {
  const placeholder = useContext(InputPlaceholderContext);
  const onClick = useContext(InputOnClickContext);
  const [inputValue, setInputValue] = useState("");
  const value = props.value || inputValue;
  const handleInput = (e: BaseSyntheticEvent) => setInputValue(e.target.value);
  const onInputFn = props.onInput || handleInput;
  return (
    <>
      {props.icons && props.icons.leftIconSrc && (
        <img
          className="input-icon input-icon--left"
          src={props.icons.leftIconSrc}
          alt="Input icon"
        />
      )}
      <input
        id={props.id}
        placeholder={placeholder}
        className={props.className}
        value={value}
        onInput={onInputFn}
        disabled={props.isDisabled}
        onClick={onClick}
      />
      {props.icons && props.icons.rightIconSrc && (
        <img
          className="input-icon input-icon--right"
          src={props.icons.rightIconSrc}
          alt="Input icon"
        />
      )}
    </>
  );
};

export { Input };
