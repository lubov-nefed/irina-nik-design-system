interface IInputProps {
  icons?: { leftIconSrc?: string; rightIconSrc?: string };
  placeholder: string;
  className: string;
  id?: string;
}

const Input: React.FC<IInputProps> = (props: IInputProps) => {
  return (
    <>
      {props.icons && props.icons.leftIconSrc !== undefined && (
        <img
          className="input-icon input-icon--left"
          src={props.icons.leftIconSrc}
          alt="Input icon"
        />
      )}
      {props.id && (
        <input
          id={props.id}
          placeholder={props.placeholder}
          className={props.className}
        />
      )}
      {!props.id && (
        <input placeholder={props.placeholder} className={props.className} />
      )}
      {props.icons && props.icons.rightIconSrc !== undefined && (
        <img
          className="input-icon input-icon--right"
          src={props.icons.rightIconSrc}
          alt="Input icon"
        />
      )}
    </>
  );
};

export { Input };
