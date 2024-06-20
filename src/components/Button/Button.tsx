import "./Button.css";

function Button(props: {
  text: string;
  size: "medium" | "big" | "small";
  style: "primary" | "secondary" | "tertiary";
}) {
  const className = `button button-${props.size} button-${props.style}`;
  return <button className={className}>{props.text}</button>;
}

export { Button };
