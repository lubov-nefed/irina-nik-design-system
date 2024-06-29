interface IButtonTextProps {
  text: string;
}
const ButtonText: React.FC<IButtonTextProps> = (props) => {
  return (
    <span className="button-text text-base font-semibold">{props.text}</span>
  );
};

export { ButtonText };
