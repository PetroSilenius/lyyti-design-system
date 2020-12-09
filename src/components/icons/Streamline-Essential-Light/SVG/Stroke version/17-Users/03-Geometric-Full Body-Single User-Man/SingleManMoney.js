import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManMoney = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-money_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-money_svg__cls-1"
      d="M19 3.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H16M17.5 3.5v-1M17.5 10.5v-1"
    />,
    <circle className="single-man-money_svg__cls-1" cx={17.5} cy={6.5} r={6} />,
    <path
      className="single-man-money_svg__cls-1"
      d="M5.5 11v3M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="single-man-money_svg__cls-1" cx={5.5} cy={4} r={3.5} />
  );

export default SvgSingleManMoney;
