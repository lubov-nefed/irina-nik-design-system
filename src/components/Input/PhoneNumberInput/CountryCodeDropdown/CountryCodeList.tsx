import type { NumberDropdownValue } from "./CountryCodeDropdown";
import { BaseSyntheticEvent } from "react";

interface ICountryCodeListProps {
  values: NumberDropdownValue[];
  handlePick: (item: NumberDropdownValue, e: BaseSyntheticEvent) => void;
}

const CountryCodeList: React.FC<ICountryCodeListProps> = (props) => {
  return (
    <ul className="country-code-list shadow-lg ">
      {props.values.map((item) => (
        <li key={item.country} className="country-code-li">
          <img
            className="country-code-list-flag"
            src={item.flagImg}
            alt={`${item.country} flag`}
          />
          {`${item.country}(+${item.code})`}
        </li>
      ))}
    </ul>
  );
};

export { CountryCodeList };
