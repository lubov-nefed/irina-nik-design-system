import "./Heading.css";
interface IHeadingProps {
  level: 1 | 2 | 3 | 4;
  className: string;
  children: React.ReactNode;
}

const Heading: React.FC<IHeadingProps> = (props) => {
  const className = props.className
    ? `h${props.level} ${props.className} font-semibold`
    : `h${props.level} font-semibold`;

  switch (props.level) {
    case 1:
      return <h1 className={className}>{props.children}</h1>;
    case 2:
      return <h2 className={className}>{props.children}</h2>;
    case 3:
      return <h3 className={className}>{props.children}</h3>;
    case 4:
      return <h4 className={className}>{props.children}</h4>;
  }
};

export { Heading };
