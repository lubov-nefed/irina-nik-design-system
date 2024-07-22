import "./PasswordInput.css";
import iconEyeOff from "../../../assets/icons/input-icons/icon-eye-off.svg";
import { BasicInput } from "../BasicInput";
import { InputPlaceholderContext } from "../InputContexts";
import { useState, BaseSyntheticEvent } from "react";
import { PasswordStrength } from "./PasswordStrength";

interface IPasswordInputProps {
  size: "medium" | "big" | "small";
}
const PasswordInput: React.FC<IPasswordInputProps> = (props) => {
  const [value, setValue] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const tooglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };
  const inputType = isVisible ? undefined : "password";
  const title = isVisible ? "Hide password" : "Show password";

  const [strength, setStrength] = useState<
    "unset" | "weak" | "medium" | "good" | "great"
  >("unset");

  const checkStrength = (input: string) => {
    const numberMatches = input.match(/[0-9]/);
    if (input.length < 5) {
      return "weak";
    }
    const mediumOrGoodLength = input.length < 9;
    if (mediumOrGoodLength && numberMatches && numberMatches.length < 4) {
      return "medium";
    }
    if (mediumOrGoodLength && numberMatches && numberMatches.length > 4) {
      return "good";
    }
    if (
      input.length >= 9 &&
      (input.includes("#") ||
        input.includes("@") ||
        input.includes("&") ||
        input.includes("!"))
    ) {
      return "great";
    }
    return "weak";
  };

  const handleInput = (e: BaseSyntheticEvent) => {
    setValue(e.target.value);
    const nextStrength = checkStrength(e.target.value);
    setStrength(nextStrength);
  };

  return (
    <div
      className={`password-input-container password-input-container-${props.size}`}
    >
      <InputPlaceholderContext.Provider value="Password">
        <BasicInput
          size={props.size}
          validation={{ isValid: true, validationText: "" }}
          inputType={inputType}
          onInput={handleInput}
          value={value}
        />
        <img
          className="password-input-icon"
          src={iconEyeOff}
          alt="Icon Eye Off"
          title={title}
          onClick={tooglePasswordVisibility}
        />
      </InputPlaceholderContext.Provider>
      <PasswordStrength state={strength} />
    </div>
  );
};
export { PasswordInput };
