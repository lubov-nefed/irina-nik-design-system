interface INoIconInputProps {
  placeholder: string;
  className: string;
}

function NoIconInput(props: INoIconInputProps) {
  return <input placeholder={props.placeholder} className={props.className} />;
}

export { NoIconInput };
