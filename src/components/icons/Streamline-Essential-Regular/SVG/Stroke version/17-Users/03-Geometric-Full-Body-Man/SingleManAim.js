import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManAim = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-aim_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-aim_svg__cls-1"
      d="M17.25.75v3M17.25 9.75v3M11.25 6.75h3M23.25 6.75h-3"
    />,
    <circle
      className="single-man-aim_svg__cls-1"
      cx={17.25}
      cy={6.75}
      r={4.5}
    />,
    <circle className="single-man-aim_svg__cls-1" cx={5.25} cy={3.75} r={3} />,
    <path
      className="single-man-aim_svg__cls-1"
      d="M5.25 8.25v6M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5z"
    />
  );

export default SvgSingleManAim;
