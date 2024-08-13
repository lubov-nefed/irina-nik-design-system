import { BasicInput } from "../components/Input/BasicInput";
import iconSearch from "../assets/icons/input-icons/icon-search.svg";
import iconEye from "../assets/icons/input-icons/icon-eye.svg";
import iconX from "../assets/icons/input-icons/icon-x.svg";
/* import { useState } from "react"; */

function Inputs() {
  const validation = {
    isValid: true,
    validationText: "",
  };
  /* const [validation, setValidation] = useState({
    isValid: true,
    validationText: "",
  }); */
  //isValid: false, validationText: "Validation Text"
  //isValid: true, validationText: "",
  return (
    <>
      Inputs
      <br />
      No Icons Valid
      <br />
      <BasicInput size="medium" validation={validation} />
      <br />
      <BasicInput size="big" validation={validation} />
      <br />
      <BasicInput size="small" validation={validation} />
      <br />
      No Icons Invalid
      <br />
      <BasicInput
        size="medium"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BasicInput
        size="big"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BasicInput
        size="small"
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      One Icon Valid
      <br />
      <BasicInput
        size="medium"
        icons={{ leftIconSrc: iconSearch }}
        validation={validation}
      />
      <br />
      <BasicInput
        size="big"
        icons={{ leftIconSrc: iconSearch }}
        validation={validation}
      />
      <br />
      <BasicInput
        size="small"
        icons={{ leftIconSrc: iconSearch }}
        validation={validation}
      />
      <br />
      <BasicInput
        size="medium"
        icons={{ rightIconSrc: iconEye }}
        validation={validation}
      />
      <br />
      <BasicInput
        size="big"
        icons={{ rightIconSrc: iconEye }}
        validation={validation}
      />
      <br />
      <BasicInput
        size="small"
        icons={{ rightIconSrc: iconEye }}
        validation={validation}
      />
      <br />
      One Icon Invalid
      <br />
      <BasicInput
        size="medium"
        icons={{ leftIconSrc: iconSearch }}
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BasicInput
        size="big"
        icons={{ leftIconSrc: iconSearch }}
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BasicInput
        size="small"
        icons={{ leftIconSrc: iconSearch }}
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      Two Icons Valid
      <br />
      <BasicInput
        size="medium"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        validation={validation}
      />
      <br />
      <BasicInput
        size="big"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        validation={validation}
      />
      <br />
      <BasicInput
        size="small"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        validation={validation}
      />
      <br />
      Two Icons Invalid
      <br />
      <BasicInput
        size="medium"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BasicInput
        size="big"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
      <BasicInput
        size="small"
        icons={{ leftIconSrc: iconSearch, rightIconSrc: iconX }}
        validation={{ isValid: false, validationText: "validationText" }}
      />
      <br />
    </>
  );
}

export { Inputs };
