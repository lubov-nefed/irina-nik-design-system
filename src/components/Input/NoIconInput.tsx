interface INoIconInputProps {
  placeholder: string;
  className: string;
}

const NoIconInput: React.FC<INoIconInputProps> = (props: INoIconInputProps) => {
  return <input placeholder={props.placeholder} className={props.className} />;
};

export { NoIconInput };
