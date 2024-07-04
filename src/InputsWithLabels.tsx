import { Input } from "./components/Input/Input";
//import iconSearch from "./assets/icons/input-icons/icon-search.svg";
//import iconEye from "./assets/icons/input-icons/icon-eye.svg";
//import iconX from "./assets/icons/input-icons/icon-x.svg";

function InputsWithLabels() {
  return (
    <>
      <br />
      Input With Label
      <br />
      <Input
        size="medium"
        type="noIcon"
        placeholder="Placeholder"
        isValid={true}
        label={{ labelText: "Comment below", labelFor: "comment" }}
      />
    </>
  );
}

export { InputsWithLabels };
