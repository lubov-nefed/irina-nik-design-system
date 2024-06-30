import { smallLoader, bigLoader, whiteLoader, darkLoader } from "./Loaders";

interface LoaderSVGProps {
  size: "small" | "big";
  color: "white" | "dark";
}

function getLoaderId(loaderProps: LoaderSVGProps): string {
  const loaderType = `${loaderProps.size}-${loaderProps.color}`;
  switch (loaderType) {
    case "small-white":
      return "16434";
    case "big-white":
      return "16628";
    case "small-dark":
      return "346_2";
    case "big-dark":
      return "17076";
    default:
      return crypto.randomUUID();
  }
}

const LoaderSVG: React.FC<LoaderSVGProps> = (loader) => {
  const loaderId = getLoaderId(loader);
  const size = loader.size === "small" ? smallLoader : bigLoader;
  const color = loader.color === "white" ? whiteLoader : darkLoader;
  return (
    <svg
      className="loader"
      width={size.sideLength}
      height={size.sideLength}
      viewBox={`0 0 ${size.sideLength} ${size.sideLength}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle Path */}
      <path
        opacity={color.circleOpacity}
        fillRule="evenodd"
        clipRule="evenodd"
        d={size.circlePath}
        fill={color.circleFill}
      />
      {/* Half Circle Path */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={size.halfCirclePath}
        fill={`url(#paint0_linear_2418_${loaderId})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_2418_${loaderId}`}
          x1={size.gradientX1Y1X2}
          y1={size.gradientX1Y1X2}
          x2={size.gradientX1Y1X2}
          y2={size.gradientY2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color.stopColor} />
          <stop offset="1" stopColor={color.stopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { LoaderSVG, type LoaderSVGProps };
