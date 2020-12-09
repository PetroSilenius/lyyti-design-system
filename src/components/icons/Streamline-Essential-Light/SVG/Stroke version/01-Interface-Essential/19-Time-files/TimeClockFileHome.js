import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-home_svg__a"
      d="M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V10.5M8.983 15.474a5 5 0 115.494-4.49"
    />,
    <path
      className="time-clock-file-home_svg__a"
      d="M9.5 7.501v3h2M12.5 16.308V22.5a1 1 0 001 1h7a1 1 0 001-1v-6.192"
    />,
    <path
      className="time-clock-file-home_svg__a"
      d="M10.5 18l5.854-4.954a1 1 0 011.292 0L23.5 18M18.5 23.5h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgTimeClockFileHome;
