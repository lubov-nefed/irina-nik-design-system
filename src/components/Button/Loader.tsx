interface LoaderSVGProps {
  size: 20 | 24;
  bgCircleOpacity: "0.2" | "0.15"; // "0.2" for white | "0.15" for dark
  bgCircleFill: "white" | "#0F172A"; // "white" for white | "#0F172A" for dark
  halfCircleFillID: string;
  gradientX1Y1X2: "10" | "12"; //20x20 10 | 24x24 12
  gradientY2: "16.6667" | "20"; //20x20 16.6667 | 24x24 20
  stopColor: "white" | "#64748B"; // "white" for white | "#64748B" for dark
}

const LoaderSVG: React.FC<LoaderSVGProps> = (props) => {
  const bgCircleD20 =
    "M10 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.31812 13.6819 3.33335 10 3.33335C6.3181 3.33335 3.33333 6.31812 3.33333 10C3.33333 13.6819 6.3181 16.6667 10 16.6667ZM10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 10 1.66669C5.39762 1.66669 1.66666 5.39765 1.66666 10C1.66666 14.6024 5.39762 18.3334 10 18.3334Z";
  const halfCircleD20 =
    "M10 3.33335C6.3181 3.33335 3.33333 6.31812 3.33333 10C3.33333 13.6819 6.3181 16.6667 10 16.6667C10.4602 16.6667 10.8333 17.0398 10.8333 17.5C10.8333 17.9603 10.4602 18.3334 10 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 10 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10C18.3333 10.4603 17.9602 10.8334 17.5 10.8334C17.0398 10.8334 16.6667 10.4603 16.6667 10C16.6667 6.31812 13.6819 3.33335 10 3.33335Z";
  const bgCircleD24 =
    "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z";
  const halfCircleD24 =
    "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12C20 7.58172 16.4183 4 12 4Z";
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox={`0 0 ${props.size} ${props.size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={props.bgCircleOpacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d={props.bgCircleD}
        fill="#475569"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d={props.halfCircleD}
        fill={`url(#paint0_linear_2418_${props.halfCircleFill})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_2418_${props.halfCircleFill}`}
          x1={props.gradientX1}
          y1={props.gradientY1}
          x2={props.gradientX2}
          y2={props.gradientY2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={props.stopColor} />
          <stop offset="1" stop-color={props.stopColor} stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
