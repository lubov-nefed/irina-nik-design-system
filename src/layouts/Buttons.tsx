import { useState } from "react";
import "./Buttons.css";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
/* === Primary Button Icons === */
import iconPrimaryLeftAdd from "../assets/icons/button-icons/icon-primary-left-add.svg";
import iconPrimaryRightArrow from "../assets/icons/button-icons/icon-primary-right-arrow.svg";
import iconPrimarySettings from "../assets/icons/button-icons/icon-primary-settings.svg";

import iconPrimaryLeftAddDisabled from "../assets/icons/button-icons/icon-primary-left-add--disabled.svg";
import iconPrimaryRightArrowDisabled from "../assets/icons/button-icons/icon-primary-right-arrow--disabled.svg";
import iconPrimarySettingsDisabled from "../assets/icons/button-icons/icon-primary-settings--disabled.svg";
/* === Secondary Button Icons === */
import iconSecondaryLeftAdd from "../assets/icons/button-icons/icon-secondary-left-add.svg";
import iconSecondaryRightArrow from "../assets/icons/button-icons/icon-secondary-right-arrow.svg";
import iconSecondarySettings from "../assets/icons/button-icons/icon-secondary-settings.svg";

import iconSecondaryLeftAddDisabled from "../assets/icons/button-icons/icon-secondary-left-add--disabled.svg";
import iconSecondaryRightArrowDisabled from "../assets/icons/button-icons/icon-secondary-right-arrow--disabled.svg";
import iconSecondarySettingsDisabled from "../assets/icons/button-icons/icon-secondary-settings--disabled.svg";
/* === Tertiary Button Icons === */
import iconTertiaryLeftAdd from "../assets/icons/button-icons/icon-tertiary-left-add.svg";
import iconTertiaryRightArrow from "../assets/icons/button-icons/icon-tertiary-right-arrow.svg";
import iconTertiarySettings from "../assets/icons/button-icons/icon-tertiary-settings.svg";

import iconTertiaryLeftAddDisabled from "../assets/icons/button-icons/icon-tertiary-left-add--disabled.svg";
import iconTertiaryRightArrowDisabled from "../assets/icons/button-icons/icon-tertiary-right-arrow--disabled.svg";
import iconTertiarySettingsDisabled from "../assets/icons/button-icons/icon-tertiary-settings--disabled.svg";

function Buttons() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
      <section className="buttons-layout-section">
        <h5 className={"buttons-layout-heading"}>Primary Medium Button</h5>
        <div className="buttons-layout-div">
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
            size={"medium"}
            style={"primary"}
            loading={isLoading}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: isDisabled
                  ? iconPrimaryLeftAddDisabled
                  : iconPrimaryLeftAdd,
                text: "M Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"primary"}
            loading={isLoading}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconPrimaryRightArrow,
                text: "M Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"primary"}
            loading={isLoading}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconPrimarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* loading*/}
          <Button
            size={"medium"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{ noIcon: { text: "M Loading" } }}
            onClick={() => {}}
            /* onClick={() => setIsLoading(!isLoading)} */
          />
          <Button
            size={"medium"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconPrimaryLeftAdd,
                text: "M Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconPrimaryRightArrow,
                text: "M Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconPrimarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* disabled*/}
          <Button
            size={"medium"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{ noIcon: { text: "M Disabled" } }}
            onClick={() => {}}
            /* onClick={() => setIsLoading(!isLoading)} */
          />
          <Button
            size={"medium"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconPrimaryLeftAddDisabled,
                text: "M Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconPrimaryRightArrowDisabled,
                text: "M Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{
              iconOnly: {
                iconSrc: iconPrimarySettingsDisabled,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
      </section>
      <section className="buttons-layout-section">
        <h5 className={"buttons-layout-heading"}>Primary Big Button</h5>
        <div className="buttons-layout-div">
          <Button
            size={"big"}
            style={"primary"}
            loading={isLoading} //using state
            disabled={isDisabled} //using state
            type={{ noIcon: { text: "Big Default" } }}
            onClick={() => {}}
            /* onClick={() => setIsLoading(!isLoading)} */
          />
          <Button
            size={"big"}
            style={"primary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: isDisabled
                  ? iconPrimaryLeftAddDisabled
                  : iconPrimaryLeftAdd,
                text: "Big Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"primary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconPrimaryRightArrow,
                text: "Big Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"primary"}
            loading={false}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconPrimarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* loading*/}
          <Button
            size={"big"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{ noIcon: { text: "Big Loading" } }}
            onClick={() => {}}
            /* onClick={() => setIsLoading(!isLoading)} */
          />
          <Button
            size={"big"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconPrimaryLeftAdd,
                text: "Big Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconPrimaryRightArrow,
                text: "Big Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconPrimarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* disabled*/}
          <Button
            size={"big"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{ noIcon: { text: "Big Disabled" } }}
            onClick={() => {}}
            /* onClick={() => setIsLoading(!isLoading)} */
          />
          <Button
            size={"big"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconPrimaryLeftAddDisabled,
                text: "Big Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconPrimaryRightArrowDisabled,
                text: "Big Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{
              iconOnly: {
                iconSrc: iconPrimarySettingsDisabled,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
      </section>
      <section className="buttons-layout-section">
        <h5 className={"buttons-layout-heading"}>Primary Small Button</h5>
        <div className="buttons-layout-div">
          <Button
            size={"small"}
            style={"primary"}
            loading={isLoading} //using state
            disabled={isDisabled} //using state
            type={{ noIcon: { text: "S Default" } }}
            onClick={() => {}}
            /* onClick={() => setIsLoading(!isLoading)} */
          />
          <Button
            size={"small"}
            style={"primary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: isDisabled
                  ? iconPrimaryLeftAddDisabled
                  : iconPrimaryLeftAdd,
                text: "S Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"primary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconPrimaryRightArrow,
                text: "S Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"primary"}
            loading={false}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconPrimarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* loading*/}
          <Button
            size={"small"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{ noIcon: { text: "S Loading" } }}
            onClick={() => {}}
            /* onClick={() => setIsLoading(!isLoading)} */
          />
          <Button
            size={"small"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconPrimaryLeftAdd,
                text: "S Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconPrimaryRightArrow,
                text: "S Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"primary"}
            loading={true}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconPrimarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* disabled*/}
          <Button
            size={"small"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{ noIcon: { text: "S Disabled" } }}
            onClick={() => {}}
            /* onClick={() => setIsLoading(!isLoading)} */
          />
          <Button
            size={"small"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconPrimaryLeftAddDisabled,
                text: "S Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconPrimaryRightArrowDisabled,
                text: "S Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"primary"}
            loading={false}
            disabled={true}
            type={{
              iconOnly: {
                iconSrc: iconPrimarySettingsDisabled,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
      </section>
      <section className="buttons-layout-section">
        <h5 className={"buttons-layout-heading"}>Secondary Medium Button</h5>
        <div className="buttons-layout-div">
          <Button
            size={"medium"}
            style={"secondary"}
            loading={isLoading} //using state
            disabled={isDisabled} //using state
            type={{ noIcon: { text: "M Default" } }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"secondary"}
            loading={isLoading}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: isDisabled
                  ? iconSecondaryLeftAddDisabled
                  : iconSecondaryLeftAdd,
                text: "M Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"secondary"}
            loading={isLoading}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconSecondaryRightArrow,
                text: "M Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"secondary"}
            loading={isLoading}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconSecondarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* loading*/}
          <Button
            size={"medium"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{ noIcon: { text: "M Loading" } }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconSecondaryLeftAdd,
                text: "M Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconSecondaryRightArrow,
                text: "M Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconSecondarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* disabled*/}
          <Button
            size={"medium"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{ noIcon: { text: "M Disabled" } }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconSecondaryLeftAddDisabled,
                text: "M Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconSecondaryRightArrowDisabled,
                text: "M Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{
              iconOnly: {
                iconSrc: iconSecondarySettingsDisabled,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
      </section>
      <section className="buttons-layout-section">
        <h5 className={"buttons-layout-heading"}>Secondary Big Button</h5>
        <div className="buttons-layout-div">
          <Button
            size={"big"}
            style={"secondary"}
            loading={isLoading} //using state
            disabled={isDisabled} //using state
            type={{ noIcon: { text: "Big Default" } }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"secondary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: isDisabled
                  ? iconSecondaryLeftAddDisabled
                  : iconSecondaryLeftAdd,
                text: "Big Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"secondary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconSecondaryRightArrow,
                text: "Big Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"secondary"}
            loading={false}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconSecondarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* loading*/}
          <Button
            size={"big"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{ noIcon: { text: "Big Loading" } }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconSecondaryLeftAdd,
                text: "Big Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconSecondaryRightArrow,
                text: "Big Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconSecondarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* disabled*/}
          <Button
            size={"big"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{ noIcon: { text: "Big Disabled" } }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconSecondaryLeftAddDisabled,
                text: "Big Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconSecondaryRightArrowDisabled,
                text: "Big Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{
              iconOnly: {
                iconSrc: iconSecondarySettingsDisabled,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
      </section>
      <section className="buttons-layout-section">
        <h5 className={"buttons-layout-heading"}>Secondary Small Button</h5>
        <div className="buttons-layout-div">
          <Button
            size={"small"}
            style={"secondary"}
            loading={isLoading} //using state
            disabled={isDisabled} //using state
            type={{ noIcon: { text: "S Default" } }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"secondary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: isDisabled
                  ? iconSecondaryLeftAddDisabled
                  : iconSecondaryLeftAdd,
                text: "S Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"secondary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconSecondaryRightArrow,
                text: "S Default",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"secondary"}
            loading={false}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconSecondarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* loading*/}
          <Button
            size={"small"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{ noIcon: { text: "S Loading" } }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconSecondaryLeftAdd,
                text: "S Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconSecondaryRightArrow,
                text: "S Loading",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"secondary"}
            loading={true}
            disabled={false}
            type={{
              iconOnly: {
                iconSrc: iconSecondarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* disabled*/}
          <Button
            size={"small"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{ noIcon: { text: "S Disabled" } }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconSecondaryLeftAddDisabled,
                text: "S Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "right",
                iconSrc: iconSecondaryRightArrowDisabled,
                text: "S Disabled",
              },
            }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"secondary"}
            loading={false}
            disabled={true}
            type={{
              iconOnly: {
                iconSrc: iconSecondarySettingsDisabled,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
      </section>
      <section className="buttons-layout-section">
        <h5 className={"buttons-layout-heading"}>Tertiary Medium Button</h5>
        <div className="buttons-layout-div">
          <Button
            size={"medium"}
            style={"tertiary"}
            loading={isLoading} //using state
            disabled={isDisabled} //using state
            type={{ noIcon: { text: "M Default" } }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"tertiary"}
            loading={isLoading}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: isDisabled
                  ? iconTertiaryLeftAddDisabled
                  : iconTertiaryLeftAdd,
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
                iconSrc: iconTertiaryRightArrow,
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
                iconSrc: iconTertiarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* loading*/}
          <Button
            size={"medium"}
            style={"tertiary"}
            loading={true}
            disabled={false}
            type={{ noIcon: { text: "M Loading" } }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"tertiary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconTertiaryLeftAdd,
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
                iconSrc: iconTertiaryRightArrow,
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
                iconSrc: iconTertiarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* disabled*/}
          <Button
            size={"medium"}
            style={"tertiary"}
            loading={false}
            disabled={true}
            type={{ noIcon: { text: "M Disabled" } }}
            onClick={() => {}}
          />
          <Button
            size={"medium"}
            style={"tertiary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconTertiaryLeftAddDisabled,
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
                iconSrc: iconTertiaryRightArrowDisabled,
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
                iconSrc: iconTertiarySettingsDisabled,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
      </section>
      <section className="buttons-layout-section">
        <h5 className={"buttons-layout-heading"}>Tertiary Big Button</h5>
        <div className="buttons-layout-div">
          <Button
            size={"big"}
            style={"tertiary"}
            loading={isLoading} //using state
            disabled={isDisabled} //using state
            type={{ noIcon: { text: "Big Default" } }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"tertiary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: isDisabled
                  ? iconTertiaryLeftAddDisabled
                  : iconTertiaryLeftAdd,
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
                iconSrc: iconTertiaryRightArrow,
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
                iconSrc: iconTertiarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* loading*/}
          <Button
            size={"big"}
            style={"tertiary"}
            loading={true}
            disabled={false}
            type={{ noIcon: { text: "Big Loading" } }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"tertiary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconTertiaryLeftAdd,
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
                iconSrc: iconTertiaryRightArrow,
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
                iconSrc: iconTertiarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* disabled*/}
          <Button
            size={"big"}
            style={"tertiary"}
            loading={false}
            disabled={true}
            type={{ noIcon: { text: "Big Disabled" } }}
            onClick={() => {}}
          />
          <Button
            size={"big"}
            style={"tertiary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconTertiaryLeftAddDisabled,
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
                iconSrc: iconTertiaryRightArrowDisabled,
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
                iconSrc: iconTertiarySettingsDisabled,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
      </section>

      <section className="buttons-layout-section">
        <h5 className={"buttons-layout-heading"}>Tertiary Small Button</h5>
        <div className="buttons-layout-div">
          <Button
            size={"small"}
            style={"tertiary"}
            loading={isLoading} //using state
            disabled={isDisabled} //using state
            type={{ noIcon: { text: "S Default" } }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"tertiary"}
            loading={false}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: isDisabled
                  ? iconTertiaryLeftAddDisabled
                  : iconTertiaryLeftAdd,
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
                iconSrc: iconTertiaryRightArrow,
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
                iconSrc: iconTertiarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* loading*/}
          <Button
            size={"small"}
            style={"tertiary"}
            loading={true}
            disabled={false}
            type={{ noIcon: { text: "S Loading" } }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"tertiary"}
            loading={true}
            disabled={false}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconTertiaryLeftAdd,
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
                iconSrc: iconTertiaryRightArrow,
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
                iconSrc: iconTertiarySettings,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
        <div className="buttons-layout-div">
          {/* disabled*/}
          <Button
            size={"small"}
            style={"tertiary"}
            loading={false}
            disabled={true}
            type={{ noIcon: { text: "S Disabled" } }}
            onClick={() => {}}
          />
          <Button
            size={"small"}
            style={"tertiary"}
            loading={false}
            disabled={true}
            type={{
              withIcon: {
                iconPosition: "left",
                iconSrc: iconTertiaryLeftAddDisabled,
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
                iconSrc: iconTertiaryRightArrowDisabled,
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
                iconSrc: iconTertiarySettingsDisabled,
                tooltip: "Tooltip for the icon button",
              },
            }}
            onClick={() => {}}
          />
        </div>
      </section>
    </>
  );
}

export { Buttons };
