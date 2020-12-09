import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSwitchOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".switch-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="switch-off_svg__a"
      x={8.5}
      y={6.501}
      width={7}
      height={11}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="switch-off_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="switch-off_svg__a"
      d="M20.5 20.251a.25.25 0 11-.25.25.25.25 0 01.25-.25M3.5 20.251a.25.25 0 11-.25.25.25.25 0 01.25-.25M20.5 3.251a.25.25 0 11-.25.25.25.25 0 01.25-.25M3.5 3.251a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 13.501h-7"
    />
  );

export default SvgSwitchOff;
