import "./Button.css";

function Button(props: {
  text: string;
  size: "medium" | "big" | "small";
  style: "primary" | "secondary" | "tertiary";
  loading: boolean;
  onClick: () => void;
}) {
  const className =
    `button button-${props.size} ` +
    (props.loading
      ? `button-${props.style}--loading`
      : `button-${props.style}`);
  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export { Button };
