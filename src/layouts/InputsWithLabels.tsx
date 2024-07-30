import { BasicInput } from "../components/Input/BasicInput";
import { InputPlaceholderContext } from "../components/Input/InputContexts";
import iconSearch from "../assets/icons/input-icons/icon-search.svg";
import iconEye from "../assets/icons/input-icons/icon-eye.svg";
import iconX from "../assets/icons/input-icons/icon-x.svg";

function InputsWithLabels() {
  return (
    <>
      <InputPlaceholderContext.Provider value="Placeholder">
        <br />
        Input With Label
        <br />
        No Icons Valid
        <br />
        <BasicInput
          size="medium"
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment1" }}
        />
        <br />
        <BasicInput
          size="big"
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment2" }}
        />
        <br />
        <BasicInput
          size="small"
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment3" }}
        />
        <br />
        No icons Invalid
        <br />
        <BasicInput
          size="medium"
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment4" }}
        />
        <br />
        <BasicInput
          size="big"
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment5" }}
        />
        <br />
        <BasicInput
          size="small"
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment6" }}
        />
        <br />
        {/* === icons === */}
        One icon Valid
        <br />
        <BasicInput
          size="medium"
          icons={{ leftIconSrc: iconSearch }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment7" }}
        />
        <br />
        <BasicInput
          size="big"
          icons={{ leftIconSrc: iconSearch }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment8" }}
        />
        <br />
        <BasicInput
          size="small"
          icons={{ leftIconSrc: iconSearch }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment9" }}
        />
        <br />
        <BasicInput
          size="medium"
          icons={{ rightIconSrc: iconEye }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment10" }}
        />
        <br />
        <BasicInput
          size="big"
          icons={{ rightIconSrc: iconEye }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment11" }}
        />
        <br />
        <BasicInput
          size="small"
          icons={{ rightIconSrc: iconEye }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment12" }}
        />
        <br />
        One icon Invalid
        <br />
        <BasicInput
          size="medium"
          icons={{ leftIconSrc: iconSearch }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment13" }}
        />
        <br />
        <BasicInput
          size="big"
          icons={{ leftIconSrc: iconSearch }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment14" }}
        />
        <br />
        <BasicInput
          size="small"
          icons={{ leftIconSrc: iconSearch }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment15" }}
        />
        <br />
        <BasicInput
          size="medium"
          icons={{
            rightIconSrc: iconEye,
          }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment16" }}
        />
        <br />
        <BasicInput
          size="big"
          icons={{
            rightIconSrc: iconEye,
          }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment17" }}
        />
        <br />
        <BasicInput
          size="small"
          icons={{
            rightIconSrc: iconEye,
          }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment18" }}
        />
        <br />
        Two icons Valid
        <br />
        <BasicInput
          size="small"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment19" }}
        />
        <br />
        <BasicInput
          size="medium"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment20" }}
        />
        <br />
        <BasicInput
          size="big"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment21" }}
        />
        <br />
        <BasicInput
          size="medium"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment22" }}
        />
        <br />
        <BasicInput
          size="big"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment23" }}
        />
        <br />
        <BasicInput
          size="small"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: true, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment24" }}
        />
        <br />
        Two iconss Invalid
        <br />
        <BasicInput
          size="small"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment25" }}
        />
        <br />
        <BasicInput
          size="medium"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment26" }}
        />
        <br />
        <BasicInput
          size="big"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment27" }}
        />
        <br />
        <BasicInput
          size="medium"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment28" }}
        />
        <br />
        <BasicInput
          size="big"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment29" }}
        />
        <br />
        <BasicInput
          size="small"
          icons={{
            leftIconSrc: iconSearch,
            rightIconSrc: iconX,
          }}
          validation={{ isValid: false, validationText: "validationText" }}
          label={{ labelText: "Comment below", labelFor: "comment30" }}
        />
      </InputPlaceholderContext.Provider>
    </>
  );
}

export { InputsWithLabels };
