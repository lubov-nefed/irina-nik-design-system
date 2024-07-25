import { CountryCodeInput } from "./CountryCodeInput";
import usaFlag from "../../../../assets/icons/input-icons/icon-usa.svg";
import { CountryCodeList } from "./CountryCodeList";

type NumberDropdownValue = { code: string; country: string; flagImg: string };

interface IPhoneNumberDropdownProps {
  size: "medium" | "big" | "small";
  values: NumberDropdownValue[];
  isDropdownOpen: boolean;
  onClick: () => void;
}

const CountryCodeDropdown: React.FC<IPhoneNumberDropdownProps> = (props) => {
  return (
    <>
      <CountryCodeInput
        size={props.size}
        validation={{
          isValid: true,
          validationText: "Country code is not recognized",
        }}
        flag={usaFlag}
        onClick={props.onClick}
        isActive={props.isDropdownOpen}
      />
      {props.isDropdownOpen && (
        <CountryCodeList values={props.values} handlePick={() => {}} />
      )}
    </>
  );
};

export { CountryCodeDropdown, type NumberDropdownValue };
