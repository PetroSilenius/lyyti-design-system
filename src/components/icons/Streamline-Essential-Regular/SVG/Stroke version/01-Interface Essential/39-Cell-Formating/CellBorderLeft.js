import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cell-border-left_svg__a"
      d="M21.75 20.247a1.5 1.5 0 01-1.5 1.5M20.25.747a1.5 1.5 0 011.5 1.5M2.25 21.747a1.5 1.5 0 01-1.5-1.5v-18a1.5 1.5 0 011.5-1.5M5.25.747h1.5M9.75.747h3M15.75.747h1.5M5.25 21.747h1.5M9.75 21.747h3M15.75 21.747h1.5M21.75 5.247v1.5M21.75 9.747v3M21.75 15.747v1.5M.75 11.247h1.5M5.25 11.247h1.5M9.75 11.247h3M15.75 11.247h1.5M20.25 11.247h1.5M11.25.747v1.5M11.25 5.247v1.5M11.25 15.747v1.5M11.25 20.247v1.5M11.25 9.747v3"
    />
  );

export default SvgCellBorderLeft;
