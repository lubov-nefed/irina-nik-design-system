import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import iconLeftAdd from "../src/assets/icons/icon-left-add.svg";
import iconRightArrow from "../src/assets/icons/icon-right-arrow.svg";
import iconSettings from "../src/assets/icons/icon-settings.svg";

import iconLeftAddDisabled from "../src/assets/icons/icon-left-add--disabled.svg";
import iconRightArrowDisabled from "../src/assets/icons/icon-right-arrow--disabled.svg";
import iconSettingsDisabled from "../src/assets/icons/icon-settings--disabled.svg";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
      App
      <br />
      {/* primary medium*/}
      <Button
        size={"medium"}
        style={"primary"}
        loading={isLoading} //using state
        disabled={isDisabled} //using state
        type={{ noIcon: { text: "M Default" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size="medium"
        style="primary"
        loading={false}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: isDisabled ? iconLeftAddDisabled : iconLeftAdd,
            text: "M Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size="medium"
        style="primary"
        loading={false}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrow,
            text: "M Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size="medium"
        style="primary"
        loading={false}
        disabled={false}
        type={{ iconOnly: { iconSrc: iconSettings } }}
        onClick={() => {}}
      />
      <br />
      {/* primary loading*/}
      <Button
        size={"medium"}
        style={"primary"}
        loading={true}
        disabled={false}
        type={{ noIcon: { text: "M Default" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size="medium"
        style="primary"
        loading={true}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: iconLeftAdd,
            text: "M Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size="medium"
        style="primary"
        loading={true}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrow,
            text: "M Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size="medium"
        style="primary"
        loading={true}
        disabled={false}
        type={{ iconOnly: { iconSrc: iconSettings } }}
        onClick={() => {}}
      />
      <br />
      {/* primary disabled*/}
      <Button
        size={"medium"}
        style={"primary"}
        loading={false}
        disabled={true}
        type={{ noIcon: { text: "M Default" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size="medium"
        style="primary"
        loading={false}
        disabled={true}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: iconLeftAddDisabled,
            text: "M Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size="medium"
        style="primary"
        loading={false}
        disabled={true}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrowDisabled,
            text: "M Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size="medium"
        style="primary"
        loading={false}
        disabled={true}
        type={{ iconOnly: { iconSrc: iconSettingsDisabled } }}
        onClick={() => {}}
      />
      <br />
      {/* primary Big*/}
      {/* <Button
        text={"Big Default"}
        size="big"
        style="primary"
        loading={false}
        disabled={false}
        type={"noIcon"}
        onClick={() => {}}
      />
      <Button
        text={"Big Default"}
        size="big"
        style="primary"
        loading={true}
        disabled={false}
        onClick={() => {}}
        type={"noIcon"}
      />
      <Button
        text={"Big Default"}
        size="big"
        style="primary"
        loading={false}
        disabled={true}
        type={"noIcon"}
        onClick={() => {}}
      />
      <br /> */}
      {/* primary Small*/}
      {/* <Button
        text={"S Default"}
        size="small"
        style="primary"
        loading={false}
        disabled={false}
        type={"noIcon"}
        onClick={() => {}}
      />
      <Button
        text={"S Default"}
        size="small"
        style="primary"
        loading={true}
        disabled={false}
        type={"noIcon"}
        onClick={() => {}}
      />
      <Button
        text={"S Default"}
        size="small"
        style="primary"
        loading={false}
        disabled={true}
        type={"noIcon"}
        onClick={() => {}}
      /> */}
    </>
  );
}

export default App;
