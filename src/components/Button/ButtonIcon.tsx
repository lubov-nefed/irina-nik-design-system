interface IButtonIconProps {
  position: "left" | "right" | "icon-only";
  src: string;
}

const ButtonIcon: React.FC<IButtonIconProps> = (props) => {
  const className =
    props.position !== "icon-only"
      ? `button-icon button-icon--${props.position}`
      : "button-icon";
  return <img className={className} src={props.src} />;
};

export { ButtonIcon };
