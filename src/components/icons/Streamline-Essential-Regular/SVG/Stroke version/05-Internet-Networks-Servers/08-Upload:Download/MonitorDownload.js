import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-download_svg__a"
      d="M6.75 6.75h-3a1.5 1.5 0 00-1.5 1.5V18a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V8.25a1.5 1.5 0 00-1.5-1.5h-3M12 19.5v3.75M8.25 23.25h7.5M2.25 16.5h19.5"
    />,
    <path
      className="monitor-download_svg__a"
      d="M9 9.75l3 3 3-3M12 12.75v-12"
    />
  );

export default SvgMonitorDownload;