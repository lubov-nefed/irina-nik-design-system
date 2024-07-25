import iconChevronDown from "../../../../assets/icons/input-icons/icon-chevron-down.svg";

interface ICountryCodeInputProps {
  size: "medium" | "big" | "small";
  validation: { isValid: boolean; validationText: string };
  flag: string;
  onClick: () => void;
  isActive: boolean;
}

const CountryCodeInput: React.FC<ICountryCodeInputProps> = (props) => {
  let containerClassName = "country-code-input-container";
  if (props.isActive) {
    containerClassName += " country-code-input-container--active";
  }

  return (
    <div className={containerClassName} onClick={props.onClick}>
      <input className="country-code-input" type="image" src={props.flag} />
      <img
        className="country-code-input-icon"
        src={iconChevronDown}
        alt="Icon open dropdown"
      />
    </div>
  );
};

export { CountryCodeInput };
