import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-warning_svg__a"
      d="M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.25 18v-3"
    />,
    <path
      className="time-clock-file-warning_svg__a"
      d="M23.063 20.683a1.774 1.774 0 01-1.587 2.567h-8.452a1.774 1.774 0 01-1.587-2.567l4.226-8.452a1.774 1.774 0 013.174 0zM8.25 14.25a4.5 4.5 0 114.25-5.978"
    />,
    <path
      className="time-clock-file-warning_svg__a"
      d="M9.75 9.75h-1.5v-1.5"
    />,
    <path
      className="time-clock-file-warning_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V7.5"
    />
  );

export default SvgTimeClockFileWarning;
