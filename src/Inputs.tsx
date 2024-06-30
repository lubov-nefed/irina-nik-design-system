import { Input } from "./components/Input/Input";
import iconSearch from "./assets/icons/input-icons/icon-search.svg";
import iconEye from "./assets/icons/input-icons/icon-eye.svg";
import iconX from "./assets/icons/input-icons/icon-x.svg";

function Inputs() {
  return (
    <>
      Inputs
      <br />
      <Input
        size="medium"
        type="noIcon"
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="big"
        type="noIcon"
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="small"
        type="noIcon"
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="medium"
        type="noIcon"
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="big"
        type="noIcon"
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="small"
        type="noIcon"
        placeholder="Placeholder"
        isValid={false}
      />
      {/* === Icons === */}
      <br />
      <Input
        size="medium"
        type={{ oneIcon: { iconPosition: "left", iconSrc: iconSearch } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="big"
        type={{ oneIcon: { iconPosition: "right", iconSrc: iconEye } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="small"
        type={{ twoIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="medium"
        type={{ oneIcon: { iconPosition: "left", iconSrc: iconSearch } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="big"
        type={{ oneIcon: { iconPosition: "right", iconSrc: iconEye } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="small"
        type={{ twoIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={false}
      />
    </>
  );
}

export { Inputs };
