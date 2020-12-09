import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutTwoColums = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-two-colums_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="layout-two-colums_svg__a"
      x={0.5}
      y={0.497}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path className="layout-two-colums_svg__a" d="M11.5.497v22" />
  );

export default SvgLayoutTwoColums;
