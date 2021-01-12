import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-up-down_svg__cls-1"
      d="M.5 13.508a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .508a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.725c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a7.089 7.089 0 01.565 2.7zM10.912.745A2.573 2.573 0 0112 .508a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a7.089 7.089 0 01.565 2.7h-3M21.5 23.508v-7M23.5 21.508l-2 2-2-2M15.5 16.508v7M17.5 18.508l-2-2-2 2"
    />
  );

export default SvgMultipleActionsUpDown;