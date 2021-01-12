import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="email-action-clock_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="email-action-clock_svg__a"
      d="M19.902 17.25H17.25v-2.652M8.25 15.75h-6a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5V9"
    />,
    <path
      className="email-action-clock_svg__a"
      d="M21.411 1.3l-8.144 6.264a3.308 3.308 0 01-4.034 0L1.089 1.3"
    />
  );

export default SvgEmailActionClock;