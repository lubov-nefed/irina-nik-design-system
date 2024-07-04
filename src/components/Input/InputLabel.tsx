interface IInputLabelProps {
  labelText: string;
  labelFor: string;
}

const InputLabel: React.FC<IInputLabelProps> = (props) => {
  return (
    <label
      className="input-label text-sm font-semibold"
      htmlFor={props.labelFor}
    >
      {props.labelText}
    </label>
  );
};

export { InputLabel };
