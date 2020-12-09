import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-disable_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="video-file-disable_svg__a"
      d="M12.607 10.89L7.636 8.214a.764.764 0 00-1.136.668v5.736a.764.764 0 001.136.668l2.175-1.338"
    />,
    <circle className="video-file-disable_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="video-file-disable_svg__a"
      d="M13.258 21.742l8.485-8.485"
    />
  );

export default SvgVideoFileDisable;
