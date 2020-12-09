import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsProcess = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-process_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-process_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-process_svg__cls-1"
      d="M5.25 8.25v6M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5zM16.5 11.25h-3.75M16.5 2.25h-.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h.75M18.75 2.25l1.5 1.5 3-3M18.75 11.25l1.5 1.5 3-3M18.75 18.75l4.5 4.5M23.25 18.75l-4.5 4.5"
    />
  );

export default SvgSingleManActionsProcess;
