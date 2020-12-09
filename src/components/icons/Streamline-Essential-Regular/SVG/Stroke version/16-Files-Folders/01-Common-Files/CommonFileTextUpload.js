import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="common-file-text-upload_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="common-file-text-upload_svg__a"
      d="M17.25 20.25v-6M17.25 14.25L15 16.5M17.25 14.25l2.25 2.25M3.75 6.75h10.5M3.75 11.25h6M3.75 15.75H7.5M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V7.5"
    />
  );

export default SvgCommonFileTextUpload;
