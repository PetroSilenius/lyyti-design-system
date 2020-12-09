import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <circle className="time-clock-file_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path className="time-clock-file_svg__a" d="M19.5 17.5h-2v-3" />
  );

export default SvgTimeClockFile;
