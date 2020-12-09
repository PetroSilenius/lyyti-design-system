import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogin1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="login-1_svg__a"
      d="M23.25 12.004H7.5M11.25 15.754l-3.75-3.75 3.75-3.75"
    />,
    <path
      className="login-1_svg__a"
      d="M15.75 16.5V21a1.437 1.437 0 01-1.364 1.5H2.113A1.437 1.437 0 01.75 21V3a1.436 1.436 0 011.363-1.5h12.273A1.437 1.437 0 0115.75 3v4.5"
    />
  );

export default SvgLogin1;
