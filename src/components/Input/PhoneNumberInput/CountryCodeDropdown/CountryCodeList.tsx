import type { NumberDropdownValue } from "./CountryCodeDropdown";

interface ICountryCodeListProps {
  values: NumberDropdownValue[];
  handlePick: (item: NumberDropdownValue) => void;
}

const CountryCodeList: React.FC<ICountryCodeListProps> = (props) => {
  return (
    <ul className="country-code-list shadow-lg ">
      {props.values.map((item) => (
        <li
          key={item.country}
          className="country-code-li"
          onClick={() => props.handlePick(item)}
        >
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
