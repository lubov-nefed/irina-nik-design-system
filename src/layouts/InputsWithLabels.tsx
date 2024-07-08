import { BaseInput } from "../components/Input/BaseInput";
import iconSearch from "../assets/icons/input-icons/icon-search.svg";
import iconEye from "../assets/icons/input-icons/icon-eye.svg";
import iconX from "../assets/icons/input-icons/icon-x.svg";

function InputsWithLabels() {
  return (
    <>
      <br />
      Input With Label
      <br />
      No Icons Valid
      <br />
      <BaseInput
        size="medium"
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment1" }}
      />
      <br />
      <BaseInput
        size="big"
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment2" }}
      />
      <br />
      <BaseInput
        size="small"
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment3" }}
      />
      <br />
      No icons Invalid
      <br />
      <BaseInput
        size="medium"
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment4" }}
      />
      <br />
      <BaseInput
        size="big"
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment5" }}
      />
      <br />
      <BaseInput
        size="small"
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment6" }}
      />
      <br />
      {/* === icons === */}
      One icon Valid
      <br />
      <BaseInput
        size="medium"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment7" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment8" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment9" }}
      />
      <br />
      <BaseInput
        size="medium"
        icons={{ rightIconSrc: iconEye }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment10" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ rightIconSrc: iconEye }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment11" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ rightIconSrc: iconEye }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment12" }}
      />
      <br />
      One icon Invalid
      <br />
      <BaseInput
        size="medium"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment13" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment14" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment15" }}
      />
      <br />
      <BaseInput
        size="medium"
        icons={{
          rightIconSrc: iconEye,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment16" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{
          rightIconSrc: iconEye,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment17" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{
          rightIconSrc: iconEye,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment18" }}
      />
      <br />
      Two icons Valid
      <br />
      <BaseInput
        size="small"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment19" }}
      />
      <br />
      <BaseInput
        size="medium"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment20" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment21" }}
      />
      <br />
      <BaseInput
        size="medium"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment22" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment23" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment24" }}
      />
      <br />
      Two iconss Invalid
      <br />
      <BaseInput
        size="small"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment25" }}
      />
      <br />
      <BaseInput
        size="medium"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment26" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment27" }}
      />
      <br />
      <BaseInput
        size="medium"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment28" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment29" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{
          leftIconSrc: iconSearch,
          rightIconSrc: iconX,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment30" }}
      />
      <br />
    </>
  );
}

export { InputsWithLabels };
