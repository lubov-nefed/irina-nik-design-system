import { BaseSyntheticEvent, useState } from "react";
import { BasicInput } from "../BasicInput";
import "./PhoneNumberInput.css";
import {
  CountryCodeDropdown,
  NumberDropdownValue,
} from "./CountryCodeDropdown/CountryCodeDropdown";
import { phoneCodes } from "./CountryCodeDropdown/phoneCodes";

interface IPhoneNumberInputProps {
  size: "medium" | "big" | "small";
}

const PhoneNumberInput: React.FC<IPhoneNumberInputProps> = (props) => {
  const [activeValue, setActiveValue] = useState(phoneCodes[0]);
  const [value, setValue] = useState(`+${activeValue.code}`);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isValid, setIsValid] = useState(true);
  const resetInvalidState = () => {
    if (!isValid) setIsValid(true);
  };

  const handleInput = (e: BaseSyntheticEvent) => {
    const inputValue = e.target.value;

    resetInvalidState();

    const pereventPlusRemove = (inputValue: string) => {
      const inputIsEmpty = inputValue === "";
      if (inputIsEmpty) {
        return;
      }
    };
    pereventPlusRemove(inputValue);

    const allowOnlyNumbers = (inputValue: string) => {
      const inputIsNumber = !isNaN(Number(inputValue));
      const InputIsPlus = inputValue === "+";
      if (inputIsNumber || InputIsPlus) {
        setValue(inputValue);
      }
    };
    allowOnlyNumbers(inputValue);

    const handlePhoneCodeInput = (inputValue: string) => {
      const inputIsCode = inputValue.length === 4 || inputValue.length === 3;

      const validCodeInput = phoneCodes.find(
        (item) => `+${item.code}` === inputValue
      );

      if (validCodeInput) {
        onPick(validCodeInput);
      } else if (inputIsCode) setIsValid(false);
    };
    handlePhoneCodeInput(inputValue);
  };

  const onPick = (item: NumberDropdownValue) => {
    setActiveValue(item);
    setValue(`+${item.code}`);
    setIsDropdownOpen(false);
    resetInvalidState();
  };

  return (
    <div className="phone-number-input-container">
      <CountryCodeDropdown
        size={props.size}
        values={phoneCodes}
        activeValue={activeValue.flagImg}
        isDropdownOpen={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onPick={onPick}
      />
      <BasicInput
        size={props.size}
        validation={{
          isValid: isValid,
          validationText: "Country code is not recognized",
        }}
        inputType={"tel"}
        parentComponent={"phone-number"}
        value={value}
        onInput={handleInput}
        maxLength={20}
      />
    </div>
  );
};

export { PhoneNumberInput };
