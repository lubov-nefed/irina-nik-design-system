import { Dropdown } from "../components/Dropdown/Dropdown";
const fruits = [
  { id: 1, value: "Apples" },
  { id: 2, value: "Bananas" },
  { id: 3, value: "Oranges" },
  { id: 4, value: "Peaches" },
];

function Dropdowns() {
  return (
    <>
      Dropdowns
      <br />
      No Icons Valid
      <br />
      <Dropdown
        size="medium"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      {/* <Dropdown
        size="big"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      No Icons Invalid
      <br />
      <Dropdown
        size="medium"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: false, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: false, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: false, validationText: "Validation Text" }}
      />
      <br />
      One Icon Valid
      <br />
      <Dropdown
        size="medium"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="medium"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      One Icon Invalid
      <br />
      <Dropdown
        size="medium"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: false, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: false, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: false, validationText: "Validation Text" }}
      />
      <br />
      Two Icons Valid
      <br />
      <Dropdown
        size="medium"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: true, validationText: "Validation Text" }}
      />
      <br />
      Two Icons Invalid
      <br />
      <Dropdown
        size="medium"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: false, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="big"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: false, validationText: "Validation Text" }}
      />
      <br />
      <Dropdown
        size="small"
        values={fruits}
        placeholder="Choose fruits"
        validation={{ isValid: false, validationText: "Validation Text" }}
      />
      <br /> */}
    </>
  );
}

export { Dropdowns };
