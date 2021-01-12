import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSwitchOff1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".switch-off-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="switch-off-1_svg__a"
      x={0.747}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="switch-off-1_svg__a"
      x={8.247}
      y={6.75}
      width={7.5}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="switch-off-1_svg__a" d="M11.247 14.25h1.5" />
  );

export default SvgSwitchOff1;