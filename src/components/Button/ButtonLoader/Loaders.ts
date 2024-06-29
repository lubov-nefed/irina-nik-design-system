import {
  type circlePathSmall,
  type halfCirclePathSmall,
  type circlePathBig,
  type halfCirclePathBig,
  type smallLoader,
  type bigLoader,
  type whiteLoader,
  type darkLoader,
} from "./loader-types";

const circlePathSmall: circlePathSmall =
  "M10 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.31812 13.6819 3.33335 10 3.33335C6.3181 3.33335 3.33333 6.31812 3.33333 10C3.33333 13.6819 6.3181 16.6667 10 16.6667ZM10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 10 1.66669C5.39762 1.66669 1.66666 5.39765 1.66666 10C1.66666 14.6024 5.39762 18.3334 10 18.3334Z";
const halfCirclePathSmall: halfCirclePathSmall =
  "M10 3.33335C6.3181 3.33335 3.33333 6.31812 3.33333 10C3.33333 13.6819 6.3181 16.6667 10 16.6667C10.4602 16.6667 10.8333 17.0398 10.8333 17.5C10.8333 17.9603 10.4602 18.3334 10 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 10 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10C18.3333 10.4603 17.9602 10.8334 17.5 10.8334C17.0398 10.8334 16.6667 10.4603 16.6667 10C16.6667 6.31812 13.6819 3.33335 10 3.33335Z";
const circlePathBig: circlePathBig =
  "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z";
const halfCirclePathBig: halfCirclePathBig =
  "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12C20 7.58172 16.4183 4 12 4Z";

const smallLoader: smallLoader = {
  sideLength: 20,
  circlePath: circlePathSmall,
  halfCirclePath: halfCirclePathSmall,
  gradientX1Y1X2: "10",
  gradientY2: "16.6667",
};

const bigLoader: bigLoader = {
  sideLength: 24,
  circlePath: circlePathBig,
  halfCirclePath: halfCirclePathBig,
  gradientX1Y1X2: "12",
  gradientY2: "20",
};

const whiteLoader: whiteLoader = {
  circleOpacity: "0.2",
  circleFill: "white",
  stopColor: "white",
};

const darkLoader: darkLoader = {
  circleOpacity: "0.15",
  circleFill: "#0F172A",
  stopColor: "#64748B",
};

export { smallLoader, bigLoader, whiteLoader, darkLoader };
