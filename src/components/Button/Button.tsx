import "./Button.css";

function Button(props: {
  text: string;
  size: "medium" | "big" | "small";
  style: "primary" | "secondary" | "tertiary";
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
  leftIcon;
  rightIcon;
}) {
  const className =
    `button button-${props.size} ` +
    (props.loading
      ? `button-${props.style}--loading`
      : `button-${props.style}`);
  return (
    <button
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export { Button };
