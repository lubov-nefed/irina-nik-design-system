import { BaseSyntheticEvent, useState } from "react";
import { BasicInput } from "../BasicInput";
import "./PhoneNumberInput.css";
import {
  CountryCodeDropdown,
  NumberDropdownValue,
} from "./CountryCodeDropdown/CountryCodeDropdown";
import { phoneCodes } from "./CountryCodeDropdown/phoneCodes";
import { flags } from "./CountryCodeDropdown/flagImages";

interface IPhoneNumberInputProps {
  size: "medium" | "big" | "small";
}

const PhoneNumberInput: React.FC<IPhoneNumberInputProps> = (props) => {
  const [activePhoneCode, setActivePhoneCode] = useState(phoneCodes[0]);
  const [value, setValue] = useState(`+${activePhoneCode.code}`);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const resetInvalidState = () => {
    if (!isValid) setIsValid(true);
  };

  const handlePhoneCodeInput = (inputValue: string) => {
    const inputIsTwoDigitsCode = inputValue.length === 3;
    const inputIsThreeDigitsCode = inputValue.length === 4;
    const matchingPhoneCode = phoneCodes.find(
      (item) => `+${item.code}` === inputValue
    );
    //handle two digits phone code
    const twoDigitsCodeMatches = matchingPhoneCode && inputIsTwoDigitsCode;
    if (twoDigitsCodeMatches) {
      onPick(matchingPhoneCode);
    }
    //handle three digits phone code
    const threeDigitsCodeMatches = matchingPhoneCode && inputIsThreeDigitsCode;
    if (!twoDigitsCodeMatches && threeDigitsCodeMatches) {
      onPick(matchingPhoneCode);
    }
    //handle invalid phone code input
    const invalidPhoneCodeInput = !matchingPhoneCode && inputIsTwoDigitsCode;
    if (invalidPhoneCodeInput) {
      setIsValid(false);
      setActivePhoneCode({ ...activePhoneCode, flagImg: flags.invalidFlag });
    }
  };

  const handleInput = (e: BaseSyntheticEvent) => {
    const inputValue = e.target.value;
    resetInvalidState();
    //prevents plus from removing
    const inputIsEmpty = inputValue === "";
    if (!inputIsEmpty) {
      const inputIsNumber = !isNaN(Number(inputValue));
      const inputIsPlus = inputValue === "+";
      //alows to input only numbers and allows to remove the first number
      if (inputIsNumber || inputIsPlus) {
        setValue(inputValue);
      }
    }
    handlePhoneCodeInput(inputValue);
  };

  const onPick = (item: NumberDropdownValue) => {
    setActivePhoneCode(item);
    setValue(`+${item.code}`);
    setIsDropdownOpen(false);
    resetInvalidState();
  };

  return (
    <div className="phone-number-input-container">
      <CountryCodeDropdown
        size={props.size}
        values={phoneCodes}
        activeValue={activePhoneCode.flagImg}
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
