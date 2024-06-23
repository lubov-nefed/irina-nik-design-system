import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import iconLeftAdd from "../src/assets/icons/button-icons/icon-tertiary-left-add.svg";
import iconRightArrow from "../src/assets/icons/button-icons/icon-tertiary-right-arrow.svg";
import iconSettings from "../src/assets/icons/button-icons/icon-tertiary-settings.svg";

import iconLeftAddDisabled from "../src/assets/icons/button-icons/icon-tertiary-left-add--disabled.svg";
import iconRightArrowDisabled from "../src/assets/icons/button-icons/icon-tertiary-right-arrow--disabled.svg";
import iconSettingsDisabled from "../src/assets/icons/button-icons/icon-tertiary-settings--disabled.svg";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
      Tertiary Medium Button
      <br />
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={isLoading} //using state
        disabled={isDisabled} //using state
        type={{ noIcon: { text: "M Default" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={isLoading}
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
        size={"medium"}
        style={"tertiary"}
        loading={isLoading}
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
        size={"medium"}
        style={"tertiary"}
        loading={isLoading}
        disabled={false}
        type={{
          iconOnly: {
            iconSrc: iconSettings,
            tooltip: "Tooltip for the icon button",
          },
        }}
        onClick={() => {}}
      />
      <br />
      {/* loading*/}
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{ noIcon: { text: "M Loading" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: iconLeftAdd,
            text: "M Loading",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrow,
            text: "M Loading",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{
          iconOnly: {
            iconSrc: iconSettings,
            tooltip: "Tooltip for the icon button",
          },
        }}
        onClick={() => {}}
      />
      <br />
      {/* disabled*/}
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{ noIcon: { text: "M Disabled" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: iconLeftAddDisabled,
            text: "M Disabled",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrowDisabled,
            text: "M Disabled",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"medium"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{
          iconOnly: {
            iconSrc: iconSettingsDisabled,
            tooltip: "Tooltip for the icon button",
          },
        }}
        onClick={() => {}}
      />
      <br />
      Tertiary Big Button
      <br />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={isLoading} //using state
        disabled={isDisabled} //using state
        type={{ noIcon: { text: "Big Default" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={false}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: isDisabled ? iconLeftAddDisabled : iconLeftAdd,
            text: "Big Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={false}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrow,
            text: "Big Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={false}
        disabled={false}
        type={{
          iconOnly: {
            iconSrc: iconSettings,
            tooltip: "Tooltip for the icon button",
          },
        }}
        onClick={() => {}}
      />
      <br />
      {/* loading*/}
      <Button
        size={"big"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{ noIcon: { text: "Big Loading" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: iconLeftAdd,
            text: "Big Loading",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrow,
            text: "Big Loading",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{
          iconOnly: {
            iconSrc: iconSettings,
            tooltip: "Tooltip for the icon button",
          },
        }}
        onClick={() => {}}
      />
      <br />
      {/* disabled*/}
      <Button
        size={"big"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{ noIcon: { text: "Big Disabled" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: iconLeftAddDisabled,
            text: "Big Disabled",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrowDisabled,
            text: "Big Disabled",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"big"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{
          iconOnly: {
            iconSrc: iconSettingsDisabled,
            tooltip: "Tooltip for the icon button",
          },
        }}
        onClick={() => {}}
      />
      <br />
      Tertiary Small Button
      <br />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={isLoading} //using state
        disabled={isDisabled} //using state
        type={{ noIcon: { text: "S Default" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={false}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: isDisabled ? iconLeftAddDisabled : iconLeftAdd,
            text: "S Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={false}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrow,
            text: "S Default",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={false}
        disabled={false}
        type={{
          iconOnly: {
            iconSrc: iconSettings,
            tooltip: "Tooltip for the icon button",
          },
        }}
        onClick={() => {}}
      />
      <br />
      {/* loading*/}
      <Button
        size={"small"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{ noIcon: { text: "S Loading" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: iconLeftAdd,
            text: "S Loading",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrow,
            text: "S Loading",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={true}
        disabled={false}
        type={{
          iconOnly: {
            iconSrc: iconSettings,
            tooltip: "Tooltip for the icon button",
          },
        }}
        onClick={() => {}}
      />
      <br />
      {/* disabled*/}
      <Button
        size={"small"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{ noIcon: { text: "S Disabled" } }}
        onClick={() => {}}
        /* onClick={() => setIsLoading(!isLoading)} */
      />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{
          withIcon: {
            iconPosition: "left",
            iconSrc: iconLeftAddDisabled,
            text: "S Disabled",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{
          withIcon: {
            iconPosition: "right",
            iconSrc: iconRightArrowDisabled,
            text: "S Disabled",
          },
        }}
        onClick={() => {}}
      />
      <Button
        size={"small"}
        style={"tertiary"}
        loading={false}
        disabled={true}
        type={{
          iconOnly: {
            iconSrc: iconSettingsDisabled,
            tooltip: "Tooltip for the icon button",
          },
        }}
        onClick={() => {}}
      />
    </>
  );
}

export default App;
