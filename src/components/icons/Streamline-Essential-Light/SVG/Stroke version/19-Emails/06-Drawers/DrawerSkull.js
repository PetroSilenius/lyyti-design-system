import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="drawer-skull_svg__a"
      d="M19.5 14.5v-13a1 1 0 00-1-1h-13a1 1 0 00-1 1v13M11.998 11v1.5"
    />,
    <path
      className="drawer-skull_svg__a"
      d="M9.5 12.5v-1.876a4 4 0 115 0V12.5"
    />,
    <path
      className="drawer-skull_svg__a"
      d="M10.5 6.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.5 6.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM.5 16.5l4-6M19.5 10.5l4 6"
    />
  );

export default SvgDrawerSkull;
