import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDialFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.079 14.779L18 12.956V7.5a2 2 0 00-4 0v8.461l-.827-1.138a1.546 1.546 0 00-1.2-.558l-.991.019a1.476 1.476 0 00-1.3 2.179l3.735 6.773A1.464 1.464 0 0014.7 24h6.387a1.476 1.476 0 001.378-.989l1.52-6.68A.461.461 0 0024 16.22a1.435 1.435 0 00-.921-1.441z" />,
    <rect width={4} height={3} rx={0.5} ry={0.5} />,
    <rect x={6} width={4} height={3} rx={0.5} ry={0.5} />,
    <rect y={5} width={4} height={3} rx={0.5} ry={0.5} />,
    <rect x={6} y={5} width={4} height={3} rx={0.5} ry={0.5} />,
    <rect y={10} width={4} height={3} rx={0.5} ry={0.5} />,
    <rect x={6} y={10} width={4} height={3} rx={0.5} ry={0.5} />,
    <rect x={12} width={4} height={3} rx={0.5} ry={0.5} />
  );

export default SvgDialFinger;
