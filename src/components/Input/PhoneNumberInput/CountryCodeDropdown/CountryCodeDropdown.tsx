import { CountryCodeInput } from "./CountryCodeInput";
import { CountryCodeList } from "./CountryCodeList";

type NumberDropdownValue = { code: string; country: string; flagImg: string };

interface ICountryCodeDropdownProps {
  size: "medium" | "big" | "small";
  values: NumberDropdownValue[];
  activeValue: string;
  isDropdownOpen: boolean;
  onClick: () => void;
  onPick: (item: NumberDropdownValue) => void;
}

const CountryCodeDropdown: React.FC<ICountryCodeDropdownProps> = (props) => {
  return (
    <>
      <CountryCodeInput
        size={props.size}
        validation={{
          isValid: true,
          validationText: "Country code is not recognized",
        }}
        flag={props.activeValue}
        onClick={props.onClick}
        isActive={props.isDropdownOpen}
      />
      {props.isDropdownOpen && (
        <CountryCodeList values={props.values} handlePick={props.onPick} />
      )}
    </>
  );
};

export { CountryCodeDropdown, type NumberDropdownValue };
