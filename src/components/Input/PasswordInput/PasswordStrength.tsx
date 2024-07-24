import { useState } from "react";
import iconInfoCircle from "../../../assets/icons/input-icons/icon-info-circle.svg";
import iconArrow from "../../../assets/icons/input-icons/icon-arrow.svg";

interface IPasswordStrength {
  state: "unset" | "weak" | "medium" | "good" | "great";
}

const PasswordStrength: React.FC<IPasswordStrength> = (props) => {
  const [showPopover, setShowPopover] = useState(false);
  if (props.state === "unset") {
    return null;
  }
  let text = props.state;
  text = text.slice(0, 1).toUpperCase() + text.slice(1);
  if (props.state === "great") {
    text = text + "!";
  }
  return (
    <>
      <div className={`password-strength password-strength--${props.state}`}>
        <div className="strength-item"></div>
        <div className="strength-item"></div>
        <div className="strength-item"></div>
        <div className="strength-item"></div>
      </div>
      <div
        className={`password-strength-text-container password-strength-text-container--${props.state}`}
      >
        <span className="password-strength-text text-xs font-semibold">
          {text}
        </span>
        {(props.state === "weak" || props.state === "medium") && (
          <>
            <img
              className="password-strength-info-img"
              alt="Info icon"
              src={iconInfoCircle}
              onClick={() => setShowPopover(!showPopover)}
            />
          </>
        )}
      </div>
      {(props.state === "weak" || props.state === "medium") && showPopover && (
        <div className="popover">
          <img className="popover-arrow" src={iconArrow} alt="Icon Arrow" />
          <div className="popover-body shadow-lg">
            <p className="text-sm font-normal">
              Your password is too easy to guess. Try to add more different
              characters.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export { PasswordStrength };
