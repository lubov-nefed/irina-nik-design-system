interface IInputIconProps {
  iconPosition: string;
  iconSrc: string;
}

const InputIcon: React.FC<IInputIconProps> = (props) => {
  return (
    <img
      className={`input-icon input-icon--${props.iconPosition}`}
      src={props.iconSrc}
      alt="Input icon"
    />
  );
};

export { InputIcon };
