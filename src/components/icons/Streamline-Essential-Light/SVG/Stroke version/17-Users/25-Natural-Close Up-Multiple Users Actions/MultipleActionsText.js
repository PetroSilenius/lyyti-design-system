import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-text_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-text_svg__cls-1"
      x={13.5}
      y={13.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="multiple-actions-text_svg__cls-1"
      d="M16.5 16.5h4M16.5 18.5h4M16.5 20.5h2M10.5 13.5H.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.152-2.124.566-.209.473-1.684.223-1.96a4.163 4.163 0 01-1.086-3.231A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985 4.163 4.163 0 01-1.086 3.232c-.25.276-.343 1.751.223 1.96 2.264.839 4.029 1.418 4.225 2.329M10.912.737A2.57 2.57 0 0112 .5a2.725 2.725 0 012.645 2.985 4.163 4.163 0 01-1.086 3.232c-.25.276-.343 1.751.223 1.96 2.089.774 3.754 1.327 4.152 2.124.033.065.064.132.093.2"
    />
  );

export default SvgMultipleActionsText;
