import { BaseInput } from "./components/Input/BaseInput";
import iconSearch from "./assets/icons/input-icons/icon-search.svg";
import iconEye from "./assets/icons/input-icons/icon-eye.svg";
import iconX from "./assets/icons/input-icons/icon-x.svg";
import { useState } from "react";

function Inputs() {
  const [validation, setValidation] = useState({
    isValid: true,
    validationText: "",
  });
  //isValid: false, validationText: "Validation Text"
  //isValid: true, validationText: "",
  return (
    <>
      Inputs
      <br />
      No Icons Valid
      <br />
      <BaseInput
        size="medium"
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      <BaseInput size="big" placeholder="Placeholder" validation={validation} />
      <br />
      <BaseInput
        size="small"
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      No Icons Invalid
      <br />
      <BaseInput
        size="medium"
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BaseInput
        size="big"
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BaseInput
        size="small"
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      One Icon Valid
      <br />
      <BaseInput
        size="medium"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      <BaseInput
        size="medium"
        icons={{ rightIconSrc: iconEye }}
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ rightIconSrc: iconEye }}
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ rightIconSrc: iconEye }}
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      One Icon Invalid
      <br />
      <BaseInput
        size="medium"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      Two Icons Valid
      <br />
      <BaseInput
        size="medium"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        placeholder="Placeholder"
        validation={validation}
      />
      <br />
      Two Icons Invalid
      <br />
      <BaseInput
        size="medium"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
    </>
  );
}

export { Inputs };
