import { SimpleDropdown } from "../components/Dropdown/SimpleDropdown/SimpleDropdown";
import { MultiSelectDropdown } from "../components/Dropdown/MultiselectDropdown/MultiSelectDropdown";
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
      Dropdowns No Search
      <br />
      Simple
      <br />
      <SimpleDropdown
        size="medium"
        values={fruits}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <SimpleDropdown
        size="big"
        values={fruits}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <SimpleDropdown
        size="small"
        values={fruits}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      Simple With Icon
      <br />
      <SimpleDropdown
        size="medium"
        values={fruits}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
        leftIcon={iconHome}
      />
      <br />
      <SimpleDropdown
        size="big"
        values={fruits}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
        leftIcon={iconHome}
      />
      <br />
      <SimpleDropdown
        size="small"
        values={fruits}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
        leftIcon={iconHome}
      />
      <br />
      Multiselect With Tags
      <br />
      <MultiSelectDropdown
        size="medium"
        type={{
          key: "multiWithTags",
          values: fruits,
        }}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <MultiSelectDropdown
        size="big"
        type={{
          key: "multiWithTags",
          values: fruits,
        }}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <MultiSelectDropdown
        size="small"
        type={{
          key: "multiWithTags",
          values: fruits,
        }}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      Multiselect No Tags
      <br />
      <MultiSelectDropdown
        size="medium"
        type={{
          key: "multiNoTags",
          values: fruits,
          listName: "fruits",
        }}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <MultiSelectDropdown
        size="big"
        type={{
          key: "multiNoTags",
          values: fruits,
          listName: "fruits",
        }}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <MultiSelectDropdown
        size="small"
        type={{
          key: "multiNoTags",
          values: fruits,
          listName: "fruits",
        }}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      Multiselect With Groups
      <br />
      <MultiSelectDropdown
        size="medium"
        type={{
          key: "multiWithGroups",
          values: fruitsWithGroups,
          listName: "fruits",
        }}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <MultiSelectDropdown
        size="big"
        type={{
          key: "multiWithGroups",
          values: fruitsWithGroups,
          listName: "fruits",
        }}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <MultiSelectDropdown
        size="small"
        type={{
          key: "multiWithGroups",
          values: fruitsWithGroups,
          listName: "fruits",
        }}
        hasSearch={false}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
    </>
  );
}

export { Dropdowns };
