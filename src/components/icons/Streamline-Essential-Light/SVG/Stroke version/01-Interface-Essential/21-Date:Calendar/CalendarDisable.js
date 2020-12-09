import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-disable_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-disable_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23"
    />,
    <circle className="calendar-disable_svg__a" cx={12} cy={15.501} r={5} />,
    <path
      className="calendar-disable_svg__a"
      d="M13.5 14.001l-3 3M10.5 14.001l3 3"
    />
  );

export default SvgCalendarDisable;
