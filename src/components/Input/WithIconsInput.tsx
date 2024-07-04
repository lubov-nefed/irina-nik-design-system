interface IWithIconsInputProps {
  icons: { leftIconSrc?: string; rightIconSrc?: string };
  placeholder: string;
  className: string;
}

const WithIconsInput: React.FC<IWithIconsInputProps> = (
  props: IWithIconsInputProps
) => {
  return (
    <>
      {"leftIconSrc" in props.icons && (
        <img
          className="input-icon input-icon--left"
          src={props.icons.leftIconSrc}
          alt="Input icon"
        />
      )}
      <input placeholder={props.placeholder} className={props.className} />
      {"rightIconSrc" in props.icons && (
        <img
          className="input-icon input-icon--right"
          src={props.icons.rightIconSrc}
          alt="Input icon"
        />
      )}
    </>
  );
};

export { WithIconsInput };
