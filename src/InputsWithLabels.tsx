import { BaseInput } from "./components/Input/BaseInput";
import iconSearch from "./assets/icons/input-icons/icon-search.svg";
import iconEye from "./assets/icons/input-icons/icon-eye.svg";
import iconX from "./assets/icons/input-icons/icon-x.svg";

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
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="big"
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="small"
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      No icons Invalid
      <br />
      <BaseInput
        size="medium"
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="big"
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="small"
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="medium"
        icons={{ rightIconSrc: iconEye }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ rightIconSrc: iconEye }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ rightIconSrc: iconEye }}
        placeholder="Placeholder"
        validation={{ isValid: true, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      One icon Invalid
      <br />
      <BaseInput
        size="medium"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{ leftIconSrc: iconSearch }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="medium"
        icons={{
          rightIconSrc: iconEye,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="big"
        icons={{
          rightIconSrc: iconEye,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
      <BaseInput
        size="small"
        icons={{
          rightIconSrc: iconEye,
        }}
        placeholder="Placeholder"
        validation={{ isValid: false, validationText: "validationText" }}
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
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
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
      <br />
    </>
  );
}

export { InputsWithLabels };
