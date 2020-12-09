import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-disable_svg__a"
      d="M17.5 8.917v-3a1 1 0 00-.293-.707L12.793.793A1 1 0 0012.086.5H1.5a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h8.457M4.5 3.5v5M7.5 3.5v5M10.5 3.5v5M13.5 5.5v4"
    />,
    <circle className="sd-card-disable_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path className="sd-card-disable_svg__a" d="M13.258 21.742l8.485-8.485" />
  );

export default SvgSdCardDisable;
