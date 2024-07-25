import { BaseSyntheticEvent, useState } from "react";
import { BasicInput } from "../BasicInput";
import "./PhoneNumberInput.css";
import { CountryCodeDropdown } from "./CountryCodeDropdown/CountryCodeDropdown";
import { phoneCodes } from "./CountryCodeDropdown/phoneCodes";

const codes = phoneCodes.map((obj) => obj.code);

interface IPhoneNumberInputProps {
  size: "medium" | "big" | "small";
}

const PhoneNumberInput: React.FC<IPhoneNumberInputProps> = (props) => {
  const [activeValue, setActiveValue] = useState(phoneCodes[0]);
  const [value, setValue] = useState(`+${activeValue.code}`);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInput = (e: BaseSyntheticEvent) => {
    console.log(e.target.value);
    const inputIsEmpty = e.target.value === "";
    const inputIsNumber = !isNaN(Number(e.target.value)) && !inputIsEmpty;
    if (inputIsNumber || e.target.value === "+") {
      console.log("number");
      setValue(e.target.value);
      return;
    } /* 
    if (codes.includes(e.target.value)) {
      console.log("display");
    } */
  };

  return (
    <div className="phone-number-input-container">
      <CountryCodeDropdown
        size={props.size}
        values={phoneCodes}
        isDropdownOpen={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      <BasicInput
        size={props.size}
        validation={{
          isValid: true,
          validationText: "Country code is not recognized",
        }}
        inputType={"tel"}
        parentComponent={"phone-number"}
        value={value}
        onInput={handleInput}
      />
    </div>
  );
};

export { PhoneNumberInput };
