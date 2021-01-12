import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowLayout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-layout_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-layout_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-layout_svg__a"
      d="M1.51 6.753h21M4.51 9.753h3v3h-3zM4.51 15.753h3v3h-3zM10.51 9.753h3v3h-3zM10.51 15.753h3v3h-3zM16.51 9.753h3v3h-3zM16.51 15.753h3v3h-3z"
    />
  );

export default SvgAppWindowLayout;