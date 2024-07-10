import { Dropdown } from "../components/Dropdown/Dropdown";
import iconHome from "../assets/icons/input-icons/icon-home.svg";
const fruits = [
  { id: "1", value: "Apples" },
  { id: "2", value: "Bananas" },
  { id: "3", value: "Oranges" },
  { id: "4", value: "Peaches" },
];

const fruitsWithGroups = {
  popular: fruits,
  others: [
    { id: "5", value: "Kiwi" },
    { id: "6", value: "Pear" },
    { id: "7", value: "Lemons" },
    { id: "8", value: "Plums" },
  ],
};

function Dropdowns() {
  return (
    <>
      Dropdowns
      <br />
      Simple
      <br />
      <Dropdown
        size="medium"
        type={{
          key: "simple",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        type={{
          key: "simple",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        type={{
          key: "simple",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      Simple With Icon
      <br />
      <Dropdown
        size="medium"
        type={{
          key: "simple",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
        leftIcon={iconHome}
      />
      <br />
      <Dropdown
        size="big"
        type={{
          key: "simple",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
        leftIcon={iconHome}
      />
      <br />
      <Dropdown
        size="small"
        type={{
          key: "simple",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
        leftIcon={iconHome}
      />
      <br />
      Multiselect With Tags
      <br />
      <Dropdown
        size="medium"
        type={{
          key: "multiWithTags",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        type={{
          key: "multiWithTags",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        type={{
          key: "multiWithTags",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      Multiselect No Tags
      <br />
      <Dropdown
        size="medium"
        type={{
          key: "multiNoTags",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        type={{
          key: "multiNoTags",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        type={{
          key: "multiNoTags",
          values: fruits,
        }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      Multiselect With Groups
      <br />
      <Dropdown
        size="medium"
        type={{ key: "multiWithGroups", values: fruitsWithGroups }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        type={{ key: "multiWithGroups", values: fruitsWithGroups }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        type={{ key: "multiWithGroups", values: fruitsWithGroups }}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
    </>
  );
}

export { Dropdowns };
