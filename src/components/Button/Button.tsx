import "./Button.css";
import loader from "../../assets/icons/icon-loading-circle-white.svg";

interface IButtonIconProps {
  position: "left" | "right";
  src: string;
}

interface IButtonProps {
  size: "medium" | "big" | "small";
  style: "primary" | "secondary" | "tertiary";
  type:
    | { noIcon: { text: string } }
    | {
        withIcon: {
          iconPosition: "left" | "right";
          iconSrc: string;
          text: string;
        };
      }
    | { iconOnly: { iconSrc: string } };
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}

const ButtonIcon: React.FC<IButtonIconProps> = (props) => {
  return (
    <img
      className={`button-icon button-icon--${props.position}`}
      src={props.src}
    />
  );
};

const Button: React.FC<IButtonProps> = (props) => {
  const className =
    `button button-${props.size} button-${props.style}` +
    (props.loading ? ` button--loading` : ``) +
    ("iconOnly" in props.type ? ` button--icon-only` : ``);
  const buttonText =
    ("noIcon" in props.type && props.type.noIcon.text) ||
    ("withIcon" in props.type && props.type.withIcon.text);
  return (
    <button
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {"withIcon" in props.type &&
        props.type.withIcon.iconPosition === "left" &&
        !props.loading && (
          <ButtonIcon position={"left"} src={props.type.withIcon.iconSrc} />
        )}
      {buttonText && <span className="button-text">{buttonText}</span>}
      {"withIcon" in props.type &&
        props.type.withIcon.iconPosition === "right" &&
        !props.loading && (
          <ButtonIcon position={"right"} src={props.type.withIcon.iconSrc} />
        )}
      {"iconOnly" in props.type && !props.loading && (
        <img className="button-icon" src={props.type.iconOnly.iconSrc} />
      )}
      {props.loading && <img className="loader" src={loader}></img>}
    </button>
  );
};

export { Button };
