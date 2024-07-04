import { Input } from "./components/Input/Input";
import iconSearch from "./assets/icons/input-icons/icon-search.svg";
import iconEye from "./assets/icons/input-icons/icon-eye.svg";
import iconX from "./assets/icons/input-icons/icon-x.svg";

function Inputs() {
  return (
    <>
      <br />
      Inputs
      <br />
      No Icons Valid
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
      No Icons Invalid
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
      One Icon Valid
      <br />
      <Input
        size="medium"
        type={{ withIcons: { leftIconSrc: iconSearch } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="big"
        type={{ withIcons: { leftIconSrc: iconSearch } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="small"
        type={{ withIcons: { leftIconSrc: iconSearch } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="medium"
        type={{ withIcons: { rightIconSrc: iconEye } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="big"
        type={{ withIcons: { rightIconSrc: iconEye } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="small"
        type={{ withIcons: { rightIconSrc: iconEye } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      One Icon Invalid
      <br />
      <Input
        size="medium"
        type={{ withIcons: { leftIconSrc: iconSearch } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="big"
        type={{ withIcons: { leftIconSrc: iconSearch } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="small"
        type={{ withIcons: { leftIconSrc: iconSearch } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="medium"
        type={{ withIcons: { rightIconSrc: iconEye } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="big"
        type={{ withIcons: { rightIconSrc: iconEye } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="small"
        type={{ withIcons: { rightIconSrc: iconEye } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      Two Icons Valid
      <br />
      <Input
        size="small"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="medium"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="big"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="medium"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="big"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      <Input
        size="small"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={true}
      />
      <br />
      Two Icons Invalid
      <br />
      <Input
        size="small"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="medium"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="big"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="medium"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="big"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
      <Input
        size="small"
        type={{ withIcons: { leftIconSrc: iconSearch, rightIconSrc: iconX } }}
        placeholder="Placeholder"
        isValid={false}
      />
      <br />
    </>
  );
}

export { Inputs };
