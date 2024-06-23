import "./Button.css";
import loader from "../../assets/icons/button-icons/icon-secondary-loading-circle-dark.svg";

interface IButtonIconProps {
  position: "left" | "right" | "icon-only";
  src: string;
}

const ButtonIcon: React.FC<IButtonIconProps> = (props) => {
  const className =
    props.position === "left" || "right"
      ? `button-icon button-icon--${props.position}`
      : "button-icon";
  return <img className={className} src={props.src} />;
};
interface ButtonTextProps {
  text: string;
}
const ButtonText: React.FC<ButtonTextProps> = (props) => {
  return (
    <span className="button-text text-base font-semibold">{props.text}</span>
  );
};

interface IButtonProps {
  size: "medium" | "big" | "small";
  style: "primary" | "secondary" | "tertiary";

  /* === There are three types of button: noIcon, withIcon and iconOnly === */
  type:
    | { noIcon: { text: string } }
    | {
        withIcon: {
          iconPosition: "left" | "right";
          iconSrc: string;
          text: string;
        };
      }
    | { iconOnly: { iconSrc: string; tooltip: string } };
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = (props) => {
  const className =
    `button button-${props.size} button-${props.style}` +
    (props.loading ? ` button--loading` : ``) +
    ("iconOnly" in props.type ? ` button--icon-only` : ``);
  const tooltip = "iconOnly" in props.type ? props.type.iconOnly.tooltip : "";

  if (!props.loading) {
    if ("noIcon" in props.type) {
      return (
        <button
          className={className}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          <ButtonText text={props.type.noIcon.text} />
        </button>
      );
    }
    if ("withIcon" in props.type) {
      return (
        <button
          className={className}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.type.withIcon.iconPosition === "left" && (
            <ButtonIcon position={"left"} src={props.type.withIcon.iconSrc} />
          )}
          <ButtonText text={props.type.withIcon.text} />
          {props.type.withIcon.iconPosition === "right" && (
            <ButtonIcon position={"right"} src={props.type.withIcon.iconSrc} />
          )}
        </button>
      );
    }
    if ("iconOnly" in props.type) {
      return (
        <button
          className={className}
          onClick={props.onClick}
          disabled={props.disabled}
          title={tooltip}
        >
          <ButtonIcon
            position={"icon-only"}
            src={props.type.iconOnly.iconSrc}
          />
        </button>
      );
    }
  }

  if (props.loading) {
    if ("noIcon" in props.type || "withIcon" in props.type) {
      const buttonText =
        "noIcon" in props.type
          ? props.type.noIcon.text
          : props.type.withIcon.text;
      return (
        <button
          className={className}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          <ButtonText text={buttonText} />
          <img className="loader" src={loader} />
        </button>
      );
    }

    if ("iconOnly" in props.type) {
      return (
        <button
          className={className}
          onClick={props.onClick}
          disabled={props.disabled}
          title={tooltip}
        >
          <img className="loader" src={loader} />
        </button>
      );
    }
  }
};

export { Button };
